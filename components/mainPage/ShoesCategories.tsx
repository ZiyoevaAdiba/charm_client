import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { navmenuItems, Routes, shoesCategories } from "@consts";
import { ILangTitles } from "@interfaces";
import im1 from "../../public/categories/mardona.jpeg";
import im2 from "../../public/categories/kudacona.jpeg";
import im3 from "../../public/categories/harbi.png";
import { HoverWrapper } from "./HoverWrapper";

export const ShoesCategories = () => {
  const { locale } = useRouter();
  const images = [im1, im2, im3];

  return (
    <section id="footwear" className="bg-light">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-center text-uppercase pb-3">
            {navmenuItems[3].title[locale as ILangTitles]}
          </h2>
          {shoesCategories.map((category, index) => {
            return (
              <div className="col-sm-4 text-center" key={index}>
                <div className="card border-0 text-center bg-light ">
                  <div
                    style={{
                      width: "270px",
                      height: "170px",
                      position: "relative",
                    }}
                    className="card-img-top mx-auto img-fluid"
                  >
                    {
                      <HoverWrapper
                        image={
                          <Image
                            key={index}
                            src={images[index]}
                            className="card-img-top"
                            alt="img"
                            layout="responsive"
                            height={220}
                            width={350}
                          />
                        }
                        link={
                          <Link href={Routes.shoes + category.link} passHref>
                            <a className="info text-lowercase">
                              {category.title[locale as ILangTitles]}
                            </a>
                          </Link>
                        }
                      ></HoverWrapper>
                    }

                    <div
                      className="mask"
                      style={{
                        background: "rgba(29, 236, 197, 0.5)",
                      }}
                    ></div>
                  </div>

                  <div className="card-body">
                    <Link href={category.link} passHref>
                      <p className="card-title text-uppercase h6 shoe-category-title">
                        {category.title[locale as ILangTitles]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
