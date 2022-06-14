import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@store";
import { useQueryParams } from "hooks/useQueryParams";
import Skeleton from "react-loading-skeleton";
import { categoryIn4Languages, seasons, seasonTitle, UrlParams } from "@consts";
import { ILangTitles } from "@interfaces";
import { getShoeCategories } from "../../src/store/slices/products/filters";

export const Filters = () => {
  const { locale, query } = useRouter();
  const { mc, season, c, subc } = query;
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.productsFilters);
  const { loading } = useAppSelector((state) => state.products);
  const { addQueryParams } = useQueryParams();

  useEffect(() => {
    if (categories.length === 0) dispatch(getShoeCategories());
  }, [mc]);

  const handleFilterChange = (
    key: string,
    value: string,
    subcParent?: string
  ) => {
    const params = [
      { key, value },
      { key: "page", value: "1" },
    ];

    // if the selected filter already was selected unselect it
    if (query[key] === value) {
      if (key === UrlParams.CategoryId) {
        addQueryParams([
          ...params,
          { key, value: undefined },
          { key: UrlParams.SubCategoryId, value: undefined },
        ]);
      } else {
        addQueryParams([...params, { key, value: undefined }]);
      }
      return;
    }

    // if the selected filter is was not selected earlier
    if (key === UrlParams.CategoryId) {
      addQueryParams([
        ...params,
        { key: UrlParams.SubCategoryId, value: undefined },
      ]);
    } else if (key === "subc" && subcParent) {
      addQueryParams([...params, { key: "c", value: subcParent }]);
    } else {
      addQueryParams(params);
    }
  };

  return loading ? (
    <Skeleton count={7} style={{ marginTop: "10px" }} />
  ) : (
    <aside className="bd-sidebar">
      <nav
        className="bd-links collapse"
        id="bd-docs-nav"
        aria-label="Docs navigation"
      >
        <ul className="list-unstyled mb-0 py-3 pt-md-1">
          {/* display category filter only for the shoes  */}
          {mc === "1" && (
            <>
              <p
                className="d-inline-flex align-items-center rounded  filter-btn text-black mb-0"
                data-bs-toggle="collapse"
                data-bs-target="#about-collapse"
                aria-expanded="false"
              >
                {categoryIn4Languages[locale as ILangTitles]}
              </p>
              <div className="collapse show" id="about-collapse">
                {categories.map((category, index) => (
                  <li
                    key={category.id}
                    className={`align-items-center rounded mb-1 ps-4 ${
                      category.id === Number(c) && "active-filter"
                    }`}
                    onClick={() =>
                      handleFilterChange(
                        UrlParams.CategoryId,
                        String(category.id)
                      )
                    }
                  >
                    {category.name[locale as ILangTitles]}
                    {category.subCategory.length > 0 && (
                      <ul className="list-unstyled mb-0">
                        {category.subCategory.map((subCategory, index) => (
                          <li
                            key={subCategory.id}
                            className={`align-items-center rounded mb-1 ps-5 ${
                              subCategory.id === Number(subc)
                                ? "active-filter"
                                : ""
                            }`}
                            onClick={(e) => [
                              e.stopPropagation(),
                              handleFilterChange(
                                UrlParams.SubCategoryId,
                                String(subCategory.id),
                                String(subCategory.parentId)
                              ),
                            ]}
                          >
                            {subCategory.name[locale as ILangTitles]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </div>
              <li className="my-3 mx-4 border-top"></li>
            </>
          )}
          <li className="mb-1">
            <p className="d-inline-flex align-items-center rounded text-black mb-0 ps-3">
              {seasonTitle[locale as ILangTitles]}
            </p>

            <ul className="list-unstyled ps-4">
              {seasons.map((item, index) => (
                <li
                  key={index}
                  className={`align-items-center rounded ${
                    item.value === String(season) && "active-filter"
                  }`}
                  onClick={() =>
                    handleFilterChange(UrlParams.Season, String(item.value))
                  }
                >
                  {item.title[locale as ILangTitles]}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
