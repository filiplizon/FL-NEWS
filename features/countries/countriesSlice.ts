import axios from "axios";
import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface Country {
  country: {
    cca2: string;
    name: {
      common: string;
    };
    flags: {
      png: string;
    };
  };
}

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
  async () => {
    try {
      const response: Response = await axios.get(
        `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`
      );
      const countryCodes = response.data.sources.map(source => source.country);
      const uniqueCountryCodes = countryCodes.filter(
        (code, index) => countryCodes.indexOf(code) === index
      );

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

      const responses = await Promise.all(requests);
      const countries = responses.filter(response => response !== null);

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
