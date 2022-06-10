import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productsSlice from "./slices/products";
import productsFiltersSlice from "./slices/products/filters";
import colorSlice from "./slices/color";

const makeStore = () =>
  configureStore({
    reducer: {
      products: productsSlice,
      productsFilters: productsFiltersSlice,
      colorSelector: colorSlice,
    },
    devTools: process.env.NODE_ENV === "development",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
