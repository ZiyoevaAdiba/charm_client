import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { IProductsResponse, IProductsState } from "@interfaces";
import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from "src/store";
import { Send } from "@utils";
import { Apis } from "@consts";

const initialState: IProductsState = {
  loading: false,
  totalElements: 0,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload.products;
      state.totalElements = actions.payload.someCount;
      // state.loading = false;
    },
    startFetching: (state) => {
      state.loading = true;
    },
    stopFetching: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, actions) => {
      return {
        ...state,
        ...actions.payload.products,
      };
    },
  },
});

export const { setProducts, startFetching, stopFetching } =
  productsSlice.actions;

export const getProducts =
  (params: Record<string, any>): AppThunk =>
  async (dispatch: Dispatch) => {
    const { page, mc, c, subc, sort, season, text } = params;

    const calculateCategoryId = () => {
      if (subc) {
        return subc;
      }
      if (c) {
        return c;
      }
      return mc;
    };

    try {
      dispatch(startFetching());
      const productsResponse: IProductsResponse = await Send.Request(
        "GET",
        Apis.getProductsByParams,
        {
          CategoryId: calculateCategoryId() || "",
          PageNumber: page || "1",
          Sort: sort || "0",
          PageSize: "12",
          ...(season && { Seasons: season }),
          ...(text && { SearchText: text }),
        }
      );
      dispatch(setProducts(productsResponse));
    } finally {
      dispatch(stopFetching());
      // console.log(error);
    }
  };

export default productsSlice.reducer;
