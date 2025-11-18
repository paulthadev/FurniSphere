import { applyTheme } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type definitions for the theme slice
// The theme slice is responsible for managing the theme state
// The theme state has a single property, theme, which stores the current theme
export type Theme = "dark" | "light" | "system";

// type definitions for the theme state
// The theme state has a single property, theme, which is of type Theme
// The theme property stores the current theme
type ThemeState = {
  theme: Theme;
};

// Initial theme state
// The initial theme state is determined by the theme stored in local storage
// If no theme is stored, the system theme is used
const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";
  applyTheme(theme);
  return theme;
};

// Theme slice
// The theme slice is responsible for managing the theme state
// It has a single reducer that sets the theme
const initialState: ThemeState = {
  theme: initializeTheme(),
};

// Theme slice
// The theme slice is responsible for managing the theme state
// It has a single reducer that sets the theme
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
