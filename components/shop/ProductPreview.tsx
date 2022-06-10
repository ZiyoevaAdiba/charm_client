import { ILangTitles, IProductDTO, IProductImage } from "@interfaces";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { noResultsText, Routes } from "@consts";
import { useRouter } from "next/router";
import ImagePlaceholder from "../../public/product-placeholder.png";
import { Pagination } from "components";
import { useAppSelector } from "@store";
import Skeleton from "react-loading-skeleton";
import { findMainImage } from "@utils";

export const ProductPreview = ({ products }: { products: IProductDTO[] }) => {
  const { locale } = useRouter();
  const { loading } = useAppSelector((state) => state.products);

  return (
    <div className="container py-3 max-vh-100">
      {loading ? (
        <Skeleton count={2} height={130} style={{ marginBottom: "20px" }} />
      ) : //  show the products if there found any or text of no result
      products.length > 0 ? (
        <>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-sm-2 g-5">
            {products?.map((product: IProductDTO, i: number) => (
              <div className="col" key={i}>
                <Link href={`${Routes.product(product.id)}`}>
                  <a>
                    <div className="card h-100 border-0 product-card">
                      <Image
                        src={
                          product.productImages.length > 0
                            ? process.env.NEXT_PUBLIC_API_CHARM_TJ +
                              findMainImage(product.productImages)
                            : ImagePlaceholder
                        }
                        alt={product.name[locale as ILangTitles]}
                        width={200}
                        height={200}
                        objectFit="contain"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6
                          className="card-title text-truncate"
                          style={{ letterSpacing: "1px" }}
                        >
                          {product.name[locale as ILangTitles]}
                        </h6>
                        <p className="card-text ">Цена {product.price} TJS</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <div className="text-center m-auto ">
          <p className="fs-4 fw-bolder text-muted m-0">
            {noResultsText[locale as ILangTitles]}
          </p>
        </div>
      )}
    </div>
  );
};
