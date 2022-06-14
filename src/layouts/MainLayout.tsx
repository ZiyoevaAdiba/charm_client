import React, { FC, ReactNode } from "react";
import { Footer } from "@components/mainPage";
import { ShopNavBar } from "@components/shop";

export const MainLayout: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ShopNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
