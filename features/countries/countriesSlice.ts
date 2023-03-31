import axios from "axios";
import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Country } from "@/types/country";

interface Response {
  data: {
    sources: {
      country: string;
    }[];
  };
}

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const REST_COUNTRIES_BASE_URL = "https://restcountries.com/v3.1/alpha";

export const fetchCountries = createAsyncThunk<Country[]>(
  "countries/fetchCountries",
  async (): Promise<Country[]> => {
    try {
      const response: Response = await axios.get(
        `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
      );

      const countryCodes: string[] = response.data.sources.map(
        source => source.country
      );
      const uniqueCountryCodes = Array.from(new Set(countryCodes));
      uniqueCountryCodes.push("pl");

      const requests = uniqueCountryCodes.map(async code => {
        try {
          const response = await axios.get(
            `${REST_COUNTRIES_BASE_URL}/${code}`
          );

          return response.data;
        } catch {
          return null;
        }
      });

      const countries = (await Promise.all(requests))
        .filter(response => response !== null)
        .map(country => country[0])
        .sort((a, b) => a.name.common.localeCompare(b.name.common));

      return countries;
    } catch (error) {
      throw error;
    }
  }
);

interface CountriesState {
  countries: Country[];
  loading: boolean;
  error: string;
}

const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCountries.pending, (state: Draft<CountriesState>) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchCountries.fulfilled,
      (state: Draft<CountriesState>, action: PayloadAction<Country[]>) => {
        state.countries = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchCountries.rejected, (state: Draft<CountriesState>) => {
      state.loading = false;
      state.error = "Error fetching news";
    });
  },
});

export default countriesSlice.reducer;
