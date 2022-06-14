import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@public/logo.svg";
import {
  companyAddress,
  companyDescription,
  companySocials,
  navmenuItems,
} from "@consts";

export const Footer = () => {
  const { locale } = useRouter();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-scroll-up">
              <a href="#">
                <i className="fa fa-angle-double-up wow flash"></i>
              </a>
            </div>

            <div className="footer-item">
              <div className="footer-about">
                <Image src={logo} alt="logo" width={100} height={100} />
                <p>{companyDescription["ru"]}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-item">
              <div className="footer-menu">
                <ul>
                  {navmenuItems.map((section, index) => {
                    if (section.location) {
                      return (
                        <li key={index}>
                          <a href={`/${locale}${section.location}`}>
                            {section.title["ru"]}
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-item">
              <div className="footer-contact">
                <ul>
                  {companyAddress.map((item: any, index) => (
                    <li key={index} className="d-flex">
                      <i className={`${item.className} p-2`}></i>
                      <p className="p-1">
                        {item.title.ru ? item.title.ru : item.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-item text-center">
              <div className="footer-title">
                <h5>Мы в соцмедиа</h5>
              </div>
              <div className="footer-subscribe">
                <ul className="d-flex gap-3 justify-content-center p-0">
                  {companySocials.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>
                        <i className={item.className}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
