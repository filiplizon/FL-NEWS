import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '@/features/sidebarSlice/sidebarSlice';
import newsStructureReducer from '@/features/newsStructureSlice/newsStructureSlice';


export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    newsStructure: newsStructureReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch