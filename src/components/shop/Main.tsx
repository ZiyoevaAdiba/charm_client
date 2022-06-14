import { useRouter } from "next/router";
import { useAppSelector } from "@store";
import { Filters, ProductPreview } from "@components/shop";

export const Main = () => {
  const { query } = useRouter();
  const { mc } = query;
  const { products } = useAppSelector((state) => state.products);

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
