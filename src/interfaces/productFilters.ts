export interface IProductsFiltersState {
  categories: ICategory[];
  loading: boolean;
}

export interface ICategory {
  id: number;
  parentId: number;
  name: {
    ru: string;
    en: string;
    tj: string;
    ch: string;
  };
  subCategory: ICategory[];
}
