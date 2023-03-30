import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/types/article";
import { Country } from "../countries/countriesSlice";
import { RootState } from "@/store/store";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

interface FetchNewsParams {
  countryName: string | string[] | undefined;
}

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ countryName }: FetchNewsParams, { getState }) => {
    const state = getState() as RootState;
    const countries = state.countries.countries;
    const countryCodeFromName =
      countries.find((c: Country) =>
        typeof countryName === "string"
          ? c.name.common === countryName.replace(/-/g, " ")
          : false
      )?.cca2 || "us";
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        countryCodeFromName || "us"
      }&pageSize=100&apiKey=${API_KEY}`
    );
    return response.data;
  }
);

type News = {
  news: Article[];
  currentArticle: Article | null;
  loading: boolean;
  error: string;
};

const initialState: News = {
  news: [],
  currentArticle: null,
  loading: false,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
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

export const { setCurrentArticle } = newsSlice.actions;

export default newsSlice.reducer;
