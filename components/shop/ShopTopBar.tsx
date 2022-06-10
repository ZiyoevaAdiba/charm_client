import { productsMainCategories, Routes, sortDropdownText } from "@consts";
import { ILangTitles } from "@interfaces";
import { getProducts } from "../../src/store/slices/products";
import { useAppDispatch } from "@store";
import { useRouter } from "next/router";
import React from "react";
import { useQueryParams } from "hooks/useQueryParams";

export const ShopTopBar = () => {
  const { addQueryParams } = useQueryParams();
  const { query, locale } = useRouter();
  const { mc, sort, page, c, subc, season } = query;
  const dispatch = useAppDispatch();

  const handleSortChanges = (value: string) => {
    addQueryParams([
      { key: "sort", value },
      { key: "page", value: "1" },
    ]);

    dispatch(getProducts({ mc, c, subc, page: "1", season, sort: value }));
  };

  return (
    <div className="container d-flex justify-content-between  pt-5 pb-3 px-2 w-100">
      <div className="row w-100 py-0 p-3 p-sm-0">
        <h2 className="fw-bolder col-sm-2" style={{ letterSpacing: "1px" }}>
          {productsMainCategories.find(
            (category) => category.value === (mc || "1")
          )?.title[locale as ILangTitles] || ""}
        </h2>
        <div className="dropdown col-sm-10 text-sm-end">
          <label> {sortDropdownText.title[locale as ILangTitles]} </label>

          <button
            className="btn btn-outline-secondary dropdown-toggle mx-2 text-dark "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {
              sortDropdownText.options.find(
                (option) => option.value === (sort || "0")
              )?.title[locale as ILangTitles]
            }
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
          {/* filter button for shoes and soles for mobile size */}
          {(mc === "1" || mc === "3") && (
            <button
              className="btn bd-sidebar-toggle d-md-none py-0 px-1 ms-3 order-3 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bd-docs-nav"
              aria-controls="bd-docs-nav"
              aria-expanded="false"
              aria-label="Toggle docs navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="bi bi-expand"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Expand</title>
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="bi bi-collapse"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <title>Collapse</title>
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
