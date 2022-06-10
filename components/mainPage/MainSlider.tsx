import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@styles/mainSlider.module.scss";

export const MainSlider = () => {
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
        {[
          "https://www.designitalianshoes.com/sites/default/themes/dis/img/home-banner/custom-handmade-shoes-for-men-and-women-online-dis.jpg",
          "http://charm.tj/wp-content/uploads/2017/11/matthew-henry-6205-2.jpg",
          "https://d2si65qo4je8x4.cloudfront.net/media/wysiwyg/BANNER.jpg",
        ].map((i) => (
          <div key={i} className={styles.banner_height}>
            <Image key={i} src={i} alt="img" layout="fill" objectFit="cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
