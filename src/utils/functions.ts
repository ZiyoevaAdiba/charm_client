import { IProductImage } from "@interfaces";

export const getCategoryNameByPath = (object: any, value: string) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const findMainImage = (productImages: IProductImage[]) => {
  const mainImage = productImages.find((image) => image.isMain);
  return mainImage ? mainImage.imagePath : "";
};
