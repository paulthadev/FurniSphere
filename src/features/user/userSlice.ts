import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
  name: string;
}

const initialState: States = {
  name: "user slice",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
