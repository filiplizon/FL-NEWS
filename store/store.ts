import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/features/sidebar/sidebarSlice";
import newsStructureReducer from "@/features/newsStructure/newsStructureSlice";
import newsReducer from "@/features/news/newsSlice";
import countriesReducer from "@/features/countries/countriesSlice";
import modalReducer from "@/features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    newsStructure: newsStructureReducer,
    news: newsReducer,
    countries: countriesReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
