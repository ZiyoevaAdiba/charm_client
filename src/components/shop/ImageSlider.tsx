import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@styles/productSlider.module.scss";
import { IProductImage } from "@interfaces";
import { useAppSelector } from "@store";
import { ImageModal } from "@components/shop";
import ImagePlaceholder from "@public/product-placeholder.png";

export const ImageSlider: FC<{ productImages: IProductImage[] }> = ({
  productImages,
}) => {
  const selectedColor = useAppSelector((state) => state.colorSelector.color);
  const [imagesWithSelectedColor, setImagesWithSelectedColor] =
    useState(productImages);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const filteredImages = productImages.filter(
      (image) => image.color === selectedColor
    );

    setImagesWithSelectedColor(selectedColor ? filteredImages : productImages);
  }, [selectedColor]);

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={
              process.env.NEXT_PUBLIC_API_CHARM_TJ +
              imagesWithSelectedColor[i]?.imagePath
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
        {imagesWithSelectedColor.length > 0 ? (
          imagesWithSelectedColor.map((productImage, i) => (
            <>
              <div key={i} className={styles.image_wrap}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_API_CHARM_TJ +
                    productImage.imagePath
                  }
                  alt="product"
                  layout="fill"
                  objectFit="contain"
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                  onClick={() => {
                    setCurrentImage(
                      process.env.NEXT_PUBLIC_API_CHARM_TJ +
                        productImage.imagePath
                    );
                  }}
                />
              </div>
            </>
          ))
        ) : (
          <div className={styles.image_wrap}>
            <Image
              src={ImagePlaceholder}
              alt="product"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </Slider>
      <ImageModal currentImage={currentImage} />
    </div>
  );
};
