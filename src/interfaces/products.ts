import { ILanguages, IProductImage } from ".";

export interface IProductDTO {
  id: number;
  name: ILanguages;
  price: number;
  seasons: number | null;
  width: number | null;
  length: number | null;
  categoryId: number;
  materialId: number | null;
  category: ICategory | null;
  size: string[] | null;
  productImages: IProductImage[];
  material: {
    id: number;
    name: ILanguages;
    categoryId: number;
  } | null;
}

export interface IProductsResponse {
  someCount: number;
  products: IProductDTO[];
}

export interface IProductsState {
  loading: boolean;
  totalElements: number;
  products: IProductDTO[];
}

export interface ICategory {
  id: number;
  parentId: number;
  name: ILanguages;
  subCategory: ICategory | null;
}

export interface CharacteristicProps {
  title: string;
  value: string | number;
}
