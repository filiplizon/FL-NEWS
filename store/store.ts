import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '@/features/sidebar/sidebarSlice';
import newsStructureReducer from '@/features/newsStructure/newsStructureSlice';
import newsReducer from '@/features/news/newsSlice';
import countriesReducer from '@/features/countries/countriesSlice';


export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    newsStructure: newsStructureReducer,
    news: newsReducer,
    countries: countriesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;