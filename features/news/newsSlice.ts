import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/types/article";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({
    countryCode,
    numberOfArticles,
  }: {
    countryCode: string | string[] | undefined;
    numberOfArticles: number;
  }) => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        countryCode || "us"
      }&pageSize=${numberOfArticles}&apiKey=${API_KEY}`
    );
    return response.data;
  }
);

type News = {
  news: Article[];
  numberOfArticles: number;
  currentArticle: Article | null;
  loading: boolean;
  error: string;
};

const initialState: News = {
  news: [],
  numberOfArticles: 20,
  currentArticle: null,
  loading: false,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNumberOfArticles: (state, action: PayloadAction<number>) => {
      state.numberOfArticles = action.payload;
    },
    setCurrentArticle: (state, action: PayloadAction<Article | null>) => {
      state.currentArticle = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.news = payload.articles;
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, state => {
      state.loading = false;
      state.error = "Error fetching news";
    });
  },
});

export const { setNumberOfArticles, setCurrentArticle } = newsSlice.actions;

export default newsSlice.reducer;
