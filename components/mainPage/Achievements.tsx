import dynamic from "next/dynamic";
import React from "react";
import { achievementsItems, achievementsTitle } from "@consts";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "next/router";
import { ILangTitles } from "@interfaces";

export const Achievements = () => {
  const { locale } = useRouter();

  return (
    <section id="clients">
      <div className="container">
        <div className="text-center">
          <h2 className=" text-uppercase">
            {achievementsTitle[locale as ILangTitles]}
          </h2>
          <div className="row p-5" data-aos="fade-up" data-aos-duration="2000">
            {achievementsItems.bottomText.map((item, index) => (
              <div
                key={index}
                className="feature-item col-lg-3 col-sm-6 text-center"
              >
                <div className="counter-title">
                  {achievementsItems.topText[locale as ILangTitles]}
                </div>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div className="counter-number" style={{ height: 50 }}>
                      {isVisible ? <CountUp end={item.amount} /> : null}
                    </div>
                  )}
                </VisibilitySensor>

                <div className="counter-title">
                  {item.description[locale as ILangTitles]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
