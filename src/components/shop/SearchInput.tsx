import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Apis, noResultsText, Routes, searchPlaceholderText } from "@consts";
import { ILangTitles, IProductDTO, IProductsResponse } from "@interfaces";
import { Send } from "@utils";

export const SearchInput = () => {
  const router = useRouter();
  const { locale, query } = router;

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState<string>(
    (query.text as string) || ""
  );
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProductDTO[]>([]);

  useEffect(() => {
    setSearchText((query.text as string) || "");
  }, [query.text]);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (event.target.closest(".search-dropdown")) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSearchChange = (value: string) => {
    const searchInput = value.trim();
    setSearchText(searchInput);
    setShowDropdown(true);
    if (searchInput.length > 0) {
      // setTimeout(() => {
      searchProducts(searchInput);
      // }, 1000);
    }

    if (searchInput.length === 0) {
      setProducts([]);
      setShowDropdown(false);
    }
  };

  const searchProducts = async (value: string) => {
    try {
      setLoading(true);
      const response: IProductsResponse = await Send.Request(
        "GET",
        Apis.searchProducts,
        { text: value.trim() }
      );
      setProducts(response.products);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDropdown(false);
    if (searchText) {
      const searchQuery = searchText.trim();
      const searchQueryEncoded = encodeURIComponent(searchQuery);
      const url = `?text=${searchQueryEncoded}`;
      router.push(Routes.search + url);
    }
  };

  return (
    <div className="w-100 position-relative search">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control mr-2 rounded-0 rounded-start"
          type="search"
          placeholder={searchPlaceholderText[locale as ILangTitles]}
          aria-label="Search"
          value={searchText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearchChange(e.target.value)
          }
          onFocus={() => {
            if (searchText && products?.length !== 0) {
              setShowDropdown(true);
            }
          }}
        />
        <button
          className="btn btn-outline btn-primary text-white rounded-0 rounded-end "
          type="submit"
        >
          <svg
            color="primary"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
      {showDropdown && !loading && (
        <div className="search-dropdown">
          <div className="dropdown-menu w-100 d-block mt-2">
            {products.length > 0 ? (
              products.map((product) => (
                <a key={product.id} href={`${Routes.product(product.id)}`}>
                  <div className="dropdown-item">
                    <h6>{product.name[locale as ILangTitles]}</h6>
                  </div>
                </a>
              ))
            ) : (
              <div className="dropdown-item">
                <h6>{noResultsText[locale as ILangTitles]}</h6>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
