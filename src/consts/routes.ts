export const Apis: Readonly<{
  [key: string]: any;
}> = {
  //products
  getProductsByParams: "api/product/getproducts",
  getCategories: "api/category/getallcategorieswithsubs",
  searchProducts: "api/product/search",
  getProductById: (id: string) => `api/product/getproductbyid?productId=${id}`,
  getProductsIds: "api/product/getproductsid",
  getBanners: "api/banner/getallbanners",
};

export const Routes: Readonly<{
  [key: string]: any;
}> = {
  shoes: "/category/1",
  leather: "/category/2",
  soles: "/category/3",
  belts: "/category/4",
  shop: "/category",
  search: "/search",
  product: (id: string) => `/product/${id}`,
};

export enum UrlParams {
  Page = "page",
  MainCategoryId = "mc",
  CategoryId = "c",
  SubCategoryId = "subc",
  SortType = "sort",
  Season = "season",
}
