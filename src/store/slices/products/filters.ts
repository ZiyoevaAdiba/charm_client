import { Apis } from "@consts";
import { ICategory, IProductsFiltersState } from "@interfaces";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { Send } from "@utils";

const initialState: IProductsFiltersState = {
  categories: [],
  loading: false,
};

const productsFiltersSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    setCategories: (state, actions) => {
      state.categories = actions.payload;
    },
  },
});

export const { setCategories, setLoading } = productsFiltersSlice.actions;

export const getShoeCategories = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const categoriesResponse: ICategory[] = await Send.Request(
      "GET",
      Apis.getCategories
    );
    const shoeCategories = categoriesResponse.find(
      (category) => category.id === 1
    )?.subCategory;

    dispatch(setCategories(shoeCategories));
  } finally {
    dispatch(setLoading(false));
  }
};

export default productsFiltersSlice.reducer;
