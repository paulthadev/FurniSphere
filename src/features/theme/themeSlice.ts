import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
  name: string;
}

const initialState: States = {
  name: "theme slice",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
