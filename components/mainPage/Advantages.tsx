import { useRouter } from "next/router";
import React from "react";
import { advantagesTitle, advantagesTypes } from "@consts";
import { ILangTitles } from "@interfaces";

export const Advantages = () => {
  const { locale } = useRouter();

  return (
    <section className="bg-light">
      <div className="container pb-3">
        <h2 className="text-center text-uppercase pb-5">
          {advantagesTitle[locale as ILangTitles]}
        </h2>
        <div className="row" data-aos="fade-up" data-aos-duration="1500">
          {advantagesTypes.map((item, index) => (
            <div
              key={index}
              className="feature-item col-lg-3 col-sm-6 text-center"
            >
              <div className="feature-icon">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x icon-background-default"></i>
                  <i
                    className={`feature-icon fa fa fa-stack-1x ${item.className}`}
                  ></i>
                </span>
              </div>
              <h6 className="py-3">{item.name[locale as ILangTitles]}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
