import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { productsTitle, productsTypes } from "@consts";
import { ILangTitles } from "@interfaces";
import { HoverWrapper } from "./HoverWrapper";
import prodIm1 from "../../public/products/shoe.png";
import prodIm2 from "../../public/products/leather.png";
import prodIm3 from "../../public/products/sole.png";

export const Products = () => {
  const { locale } = useRouter();
  const images = [prodIm1, prodIm2, prodIm3, prodIm1];
  return (
    <section id="products">
      <div className="container">
        <div className="row pb-5" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-center text-uppercase pb-5">
            {productsTitle[locale as ILangTitles]}
          </h2>
          {productsTypes.map((product, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="card border-0">
                  <HoverWrapper
                    image={
                      <Image
                        key={index}
                        src={images[index]}
                        className="card-img-top"
                        alt="img"
                        layout="responsive"
                        height={220}
                        width={350}
                      />
                    }
                    link={
                      <Link href={product.link} passHref={true}>
                        <a className="info">
                          {product.title[locale as ILangTitles]}
                        </a>
                      </Link>
                    }
                  ></HoverWrapper>

                  <div className="card-body">
                    <Link href={product.link} passHref={true}>
                      <h4 className="card-title product-link-hover">
                        {product.title[locale as ILangTitles]}
                      </h4>
                    </Link>

                    <p className="card-text">
                      {product.description[locale as ILangTitles]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
