import { createSlice } from "@reduxjs/toolkit";

const productColorSlice = createSlice({
  name: "productColor",
  initialState: {
    color: "",
  },
  reducers: {
    setProductColor: (state, { payload }) => {
      state.color = payload;
    },
  },
});
export const { setProductColor } = productColorSlice.actions;
export default productColorSlice.reducer;
