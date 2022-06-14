import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ILangTitles } from "@interfaces";
import { productsMainCategories, Routes } from "@consts";

export const TagsBar: FC<{ compLocation: string }> = ({ compLocation }) => {
  const { query, locale } = useRouter();
  const { mc, sort, text } = query;

  return (
    <div className="container d-flex mb-4 p-0 overflow-auto">
      {productsMainCategories.map((category, index) => (
        <Link
          href={
            compLocation === "search"
              ? {
                  pathname: Routes.search,
                  query: {
                    mc: category.value,
                    ...(sort && { sort }),
                    page: "1",
                    text: text || "",
                  },
                }
              : {
                  pathname: Routes.shop + "/" + category.value,
                  query: {
                    ...(sort && { sort }),
                  },
                }
          }
          key={index}
        >
          <a
            className={
              mc == category.value
                ? "btn rounded-pill tags-bar-btn tags-bar-btn-active"
                : "btn rounded-pill tags-bar-btn"
            }
          >
            {category.title[locale as ILangTitles]}
          </a>
        </Link>
      ))}
    </div>
  );
};
