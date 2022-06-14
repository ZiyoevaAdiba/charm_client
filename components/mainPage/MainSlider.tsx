import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@styles/mainSlider.module.scss";
import { IBannerDTO } from "@interfaces";
import ImagePlaceholder from "../../public/product-placeholder.png";

export const MainSlider = ({
  bannerImages,
}: {
  bannerImages: IBannerDTO[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: "quint",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container pt-3 pb-5">
      <Slider {...settings} className={`${styles.banner_height}`}>
        {bannerImages.map((i) => (
          <div key={i.id} className={styles.banner_height}>
            <Image
              src={
                process.env.NEXT_PUBLIC_API_CHARM_TJ + i.imagePath ||
                ImagePlaceholder
              }
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
