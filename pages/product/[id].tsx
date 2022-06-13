import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ILangTitles, IProductDTO } from "@interfaces";
import { Send } from "@utils";
import {
  Apis,
  categoryIn4Languages,
  characteristics,
  characteristicsTitle,
  Routes,
  seasons,
} from "@consts";
import { useRouter } from "next/router";
import { MainLayout } from "src/layouts";
import { Characteristic, ImageSlider } from "components";
import { ColorBoxes } from "components/shop/ColorBoxes";
import Link from "next/link";

interface IProps {
  product: IProductDTO;
}

const ProductDetail: NextPage<IProps> = ({ product }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Head>
        <title>Страница продукта {product.name[locale as ILangTitles]}</title>
      </Head>
      {/* product detail page like in market stores */}

      <MainLayout>
        <div className="container py-5 max-vh-100">
          <div className="row">
            <p className="text-center fs-5">
              {categoryIn4Languages[locale as ILangTitles]}:
              <Link href={Routes.shop + "/" + product.category?.id}>
                <a className="text-primary ps-2">
                  {product.category?.name[locale as ILangTitles]}
                </a>
              </Link>
            </p>
            <div className="col col-sm-7">
              <ImageSlider productImages={product.productImages} />
            </div>
            <div className="col col-sm-5 pt-3">
              <ul>
                <h3 className="fw-bold" style={{ letterSpacing: "1px" }}>
                  {product.name[locale as ILangTitles]}
                </h3>
                <p>
                  {characteristics.price[locale as ILangTitles]}
                  <span className="ms-3">{product.price} TJS</span>
                </p>
                <h4 style={{ letterSpacing: "1px" }}>
                  {characteristicsTitle[locale as ILangTitles]}
                </h4>
                {product.productImages && (
                  <li className="mb-2">
                    <p className="m-0">
                      {/* {characteristics.color[locale as ILangTitles]} */}
                    </p>
                    <ColorBoxes productImages={product.productImages} />
                  </li>
                )}
                {product.size && (
                  <li>
                    <span className="me-3">
                      {characteristics.size[locale as ILangTitles]}
                    </span>
                    {product.size.map((item) => (
                      <span className="text-dark" key={item}>
                        {item},{" "}
                      </span>
                    ))}
                  </li>
                )}

                {product.category?.subCategory && (
                  <Characteristic
                    title={characteristics.subCategory[locale as ILangTitles]}
                    value={
                      product.category.subCategory.name[locale as ILangTitles]
                    }
                  />
                )}
                {product.length !== null && (
                  <Characteristic
                    title={characteristics.length[locale as ILangTitles]}
                    value={product.length}
                  />
                )}
                {product.width !== null && (
                  <Characteristic
                    title={characteristics.width[locale as ILangTitles]}
                    value={product.width}
                  />
                )}
                {product.seasons && (
                  <Characteristic
                    title={characteristics.seasons[locale as ILangTitles]}
                    value={
                      seasons.find((i) => i.value === String(product.seasons))
                        ?.title[locale as ILangTitles] || "1"
                    }
                  />
                )}
                {product.material?.name && (
                  <Characteristic
                    title={characteristics.material[locale as ILangTitles]}
                    value={product.material.name[locale as ILangTitles]}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

const locales = ["ru", "en", "tj", "ch"];
export const getStaticPaths: GetStaticPaths = async () => {
  //["1","2","3","4","5","6","7","8","9","10"]
  const productsIds: number[] = await Send.Request("GET", Apis.getProductsIds);

  const localesForEachId = productsIds.map((id: number) =>
    locales.map((locale: string) => ({ params: { id: id.toString(), locale } }))
  );
  const paths = localesForEachId.flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const product: IProductDTO = await Send.Request(
    "GET",
    Apis.getProductById(params.id)
  );
  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};

export default ProductDetail;
