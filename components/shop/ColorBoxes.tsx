import { IProductImage } from "@interfaces";
import React from "react";

export const ColorBoxes = ({
  productImages,
}: {
  productImages: IProductImage[];
}) => {
  const colorSet = new Set(productImages.map((item) => item.color));
  const colors = Array.from(colorSet);

  return (
    <div className="row">
      {colors.map((color) => (
        <div
          key={color}
          className="color-box m-2 text-white border rounded d-flex align-items-center justify-content-center"
        >
          <div
            className="color-circle rounded-circle border"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      ))}
    </div>
  );
};
