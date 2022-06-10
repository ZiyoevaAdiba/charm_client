import {
  Apis,
  noResultsText,
  Routes,
  searchResultText,
  sortDropdownText,
} from "@consts";
import { ILangTitles, IProductsResponse } from "@interfaces";
import { getProducts, setProducts } from "../src/store/slices/products";
import { useAppDispatch, useAppSelector, wrapper } from "@store";
import { Send } from "@utils";
import { ProductPreview, TagsBar } from "components";
import { useQueryParams } from "hooks/useQueryParams";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MainLayout } from "src/layouts";
import Head from "next/head";

const Search = () => {
  const dispatch = useAppDispatch();
  const { addQueryParams } = useQueryParams();
  const router = useRouter();
  const { locale, replace } = router;
  const { text, page, sort, mc } = router.query;
  const { products, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (page || text) {
      dispatch(getProducts({ mc, text, page, sort }));
    }
  }, [page, text, sort, mc]);

  const handleSortChanges = (value: string) => {
    addQueryParams([
      { key: "sort", value },
      { key: "page", value: "1" },
    ]);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <MainLayout>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-4 flex-column flex-md-row">
            <div className="d-flex align-items-center py-2">
              {/* previous page icon */}
              <button
                className="btn m-0 p-0 me-3"
                onClick={() => replace(Routes.shoes)}
              >
                <i className="fa fa-angle-double-left fa-2x" />
              </button>
              <p className="fs-4 fw-bolder text-muted m-0 ">
                {searchResultText[locale as ILangTitles]} {text}
              </p>
            </div>
            <div className="dropdown text-md-end">
              <label> {sortDropdownText.title[locale as ILangTitles]} </label>
              <button
                className="btn btn-outline-secondary dropdown-toggle mx-2 text-dark "
                type="button"
                id="sortDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {
                  sortDropdownText.options.find(
                    (option) => option.value === (sort || "0")
                  )?.title[locale as ILangTitles]
                }
              </button>
              {/* </div> */}
              <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                {sortDropdownText.options.map((option, index) => (
                  <li
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleSortChanges(option.value)}
                  >
                    {option.title[locale as ILangTitles]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <TagsBar compLocation="search" />
          <div className="flex-fill">
            <ProductPreview products={products} />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Search;
