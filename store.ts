import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./src/features/theme/themeSlice";
import userReducer from "./src/features/user/userSlice";
import cartReducer from "./src/features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    userState: userReducer,
    cartState: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
