import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
  name: string;
}

const initialState: States = {
  name: "cart slice",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
