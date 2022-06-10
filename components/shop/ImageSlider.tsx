import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@styles/productSlider.module.scss";
import { IProductImage } from "@interfaces";

export const ImageSlider: FC<{ productImages: IProductImage[] }> = ({
  productImages,
}) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={
              process.env.NEXT_PUBLIC_API_CHARM_TJ + productImages[i].imagePath
            }
            alt="thumb"
            width={80}
            height={60}
            objectFit="cover"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: `slick-dots ${styles.slick_thumb}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {productImages.map((productImage, i) => (
          <div key={i} className={styles.image_wrap}>
            <Image
              src={
                process.env.NEXT_PUBLIC_API_CHARM_TJ + productImage.imagePath
              }
              alt="product"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
