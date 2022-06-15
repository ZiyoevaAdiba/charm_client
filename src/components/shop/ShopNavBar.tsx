import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { companyDescriptionLogo, Routes } from "@consts";
import { ILangTitles } from "@interfaces";
import { LanguageSelector } from "@components";
import { SearchInput } from "@components/shop";
import logo from "@public/logo.svg";

export const ShopNavBar = () => {
  const { locale } = useRouter();

  return (
    <nav className="shadow-sm sticky-top navbar navbar-light bg-light p-0">
      <div className="container p-md-0 p-3 pt-0">
        <div className="brand lh-sm d-flex col-lg-4 col-md-5 ">
          <Link href={Routes.shoes}>
            <a
              className="navbar-brand position-relative p-0 m-0 "
              style={{ width: "62px", height: "75px" }}
            >
              <Image
                src={logo}
                alt="logo"
                objectFit="contain"
                layout="fixed"
                width={62}
                height={75}
              />
            </a>
          </Link>

          <div className="d-flex justify-content-center align-items-start flex-column px-2">
            <h6 className="m-0 text-uppercase">charm.tj</h6>
            <p
              className="m-0 text-break text-wrap text-secondary"
              style={{ fontSize: "12px" }}
            >
              {companyDescriptionLogo[locale as ILangTitles]}
            </p>
          </div>
        </div>
        <div className="d-flex col-12 col-lg-6 col-md-7 ">
          <SearchInput />

          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};
