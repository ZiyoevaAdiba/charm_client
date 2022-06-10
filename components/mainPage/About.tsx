import { navmenuItems, aboutText } from "@consts";
import { ILangTitles } from "@interfaces";
import { useRouter } from "next/router";
import React from "react";

export const About = () => {
  const { locale } = useRouter();

  return (
    <section id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="text-uppercase pb-4">
            {navmenuItems[0].title[locale as ILangTitles]}
          </h2>
          <p className="text-muted" style={{ fontSize: "18px" }}>
            {aboutText[locale as ILangTitles]}
          </p>
        </div>
      </div>
    </section>
  );
};
