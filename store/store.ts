import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/features/sidebar/sidebarSlice";
import newsReducer from "@/features/news/newsSlice";
import countriesReducer from "@/features/countries/countriesSlice";
import modalReducer from "@/features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    news: newsReducer,
    countries: countriesReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
