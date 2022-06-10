import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { IProductsResponse } from "@interfaces";
import { Apis } from "@consts";
import { Send } from "@utils";
import { ShopNavBar, ShopTopBar, TagsBar, Main } from "components";
import { Footer } from "components/mainPage";
import { AppStore, wrapper } from "@store";
import { setProducts } from "../../src/store/slices/products";
import { MainLayout } from "src/layouts";
import React from "react";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Магазин</title>
        <meta name="description" content="Список обуви сайта charm.tj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <MainLayout>
        <ShopTopBar />
        <TagsBar compLocation="mainProductPage" />
        <Main />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { mc: "1" }, locale: "ru" },
      { params: { mc: "1" }, locale: "en" },
      { params: { mc: "1" }, locale: "tj" },
      { params: { mc: "1" }, locale: "ch" },
      { params: { mc: "2" }, locale: "ru" },
      { params: { mc: "2" }, locale: "en" },
      { params: { mc: "2" }, locale: "tj" },
      { params: { mc: "2" }, locale: "ch" },
      { params: { mc: "3" }, locale: "ru" },
      { params: { mc: "3" }, locale: "en" },
      { params: { mc: "3" }, locale: "tj" },
      { params: { mc: "3" }, locale: "ch" },
      { params: { mc: "4" }, locale: "en" },
      { params: { mc: "4" }, locale: "ru" },
      { params: { mc: "4" }, locale: "tj" },
      { params: { mc: "4" }, locale: "ch" },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store: AppStore) =>
    async ({ params }) => {
      const products: IProductsResponse = await Send.Request(
        "GET",
        Apis.getProductsByParams,
        {
          CategoryId: params?.mc,
          PageNumber: "1" || undefined,
          PageSize: "12",
          Sort: "0" || undefined,
        }
      );

      store.dispatch(setProducts(products));
      return {
        props: {
          products: products.products || null,
          totalElements: products.someCount || null,
        },
        revalidate: 60,
      };
    }
);
export default Products;
