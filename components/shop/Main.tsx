import { useAppSelector } from "@store";
import { useRouter } from "next/router";
import React from "react";
import { Filters } from "./Filters";
import { ProductPreview } from "./ProductPreview";

export const Main = () => {
  const { query } = useRouter();
  const { mc, sort, page, season } = query;
  const { products, loading } = useAppSelector((state) => state.products);

  return (
    <>
      {mc === "1" || mc === "3" ? (
        <div className="container bd-layout">
          <Filters />
          <div className="flex-fill">
            <ProductPreview products={products} />
          </div>
        </div>
      ) : (
        <div className="flex-fill">
          <ProductPreview products={products} />
        </div>
      )}
    </>
  );
};
