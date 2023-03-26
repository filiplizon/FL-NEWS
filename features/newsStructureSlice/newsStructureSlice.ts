import { createSlice } from '@reduxjs/toolkit'

interface newsStructure {
  isListView: boolean
}

const initialState: newsStructure = {
  isListView: false,
}

export const newsStructureSlice = createSlice({
  name: 'newsStructure',
  initialState,
  reducers: {
    toggleNewsStructure: (state) => {
      state.isListView = !state.isListView
    },
  },
})

export const { toggleNewsStructure} = newsStructureSlice.actions

export default newsStructureSlice.reducer