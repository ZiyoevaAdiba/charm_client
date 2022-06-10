import React from "react";
import Slider from "react-slick";
import { clientsNames, trustedTitle } from "@consts";
import Image from "next/image";
import im1 from "../../public/trusted/barkiDushanbe.jpg";
import im2 from "../../public/trusted/gvardiya.jpg";
import im3 from "../../public/trusted/kdam.jpg";
import im4 from "../../public/trusted/barkiTojik.jpg";
import im5 from "../../public/trusted/rogun.jpg";
import im6 from "../../public/trusted/talko.jpg";
import { useRouter } from "next/router";
import { ILangTitles } from "@interfaces";

export const Trusted = () => {
  const { locale } = useRouter();

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="clients" className="bg-light">
      <div className="container">
        <div className="text-center pb-5">
          <h2 className="text-uppercase mb-3">
            {trustedTitle[locale as ILangTitles]}
          </h2>
          <Slider {...settings}>
            {[im1, im2, im3, im4, im5, im6].map((img, i) => (
              <div
                key={i}
                // className="d-flex justify-content-center align-items-center px-1"
              >
                <Image
                  src={img}
                  alt="img"
                  layout="fixed"
                  objectFit="contain"
                  height={80}
                  width={80}
                />
                <p
                  className="lh-sm text-uppercase p-1 m-0 "
                  style={{ fontSize: "14px" }}
                >
                  {clientsNames[i][locale as ILangTitles]}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
