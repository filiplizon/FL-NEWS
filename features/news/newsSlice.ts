import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/types/article";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data;
  }
);

type News = {
    news: Article[],
    loading: boolean,
    error: string
} 

const initialState: News = {
    news: [],
    loading: false,
    error: ''
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, state => {
        state.loading = true;
        state.error = ""
    });
    builder.addCase(fetchNews.fulfilled, (state, action: PayloadAction<Response>) => {
        state.news = action.payload.articles;
        state.loading = false;
    })
    builder.addCase(fetchNews.rejected, state => {
        state.loading = false;
        state.error = "Error fetching news"
    })
    }
})

export default newsSlice.reducer
