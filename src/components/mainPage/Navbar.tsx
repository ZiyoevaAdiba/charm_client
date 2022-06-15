import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { navmenuItems, companyDescriptionLogo } from "@consts";
import logo from "@public/logo.svg";
import { ILangTitles } from "@interfaces";
import { LanguageSelector } from "@components";

export const Navbar = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top p-0 shadow-sm">
      <div className="container">
        <div
          className="brand lh-sm d-flex"
          style={{ width: "300px", height: "75px" }}
        >
          <a
            href="#"
            className="navbar-brand  position-relative py-2 h-100 m-0"
            style={{ width: "80px", height: "65px" }}
          >
            <Image src={logo} alt="logo" layout="fill" />
          </a>
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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {navmenuItems.map((item, index) => (
              <li key={index} className="nav-item p-lg-1">
                <a href={item.location} className="nav-link">
                  {item.title[locale as ILangTitles]}
                </a>
              </li>
            ))}
            <li className="nav-item p-lg-1 align-self-lg-center">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
