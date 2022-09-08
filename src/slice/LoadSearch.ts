import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { GetSearch } from "../UnsplashApi/UnsplashApi";


// createAsyncThunk simplifies our Redux app by returning an action creator that dispatches promise lifecycle actions for us so we don't have to dispatch them ourselves.
export const LoadSearch:any = createAsyncThunk(
  "search/LoadSearch",
  async (search:any) => {

    return GetSearch(search);

  }
);

const sliceOptions = {
  name: "search",
  initialState: {
    search:[],
    isLoading: false,
    hasError: false
  },
  reducers: {
    AddWORD:(state:any,action:any)=>{
      state.search.push(action.payload)
    }
  },
  extraReducers: {
    [LoadSearch.pending]: (state:any, action:any) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [LoadSearch.fulfilled]: (state:any, action:any) => {
      state.search = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [LoadSearch.rejected]: (state:any, action:any) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const searchSlice = createSlice(sliceOptions);

export const { AddWORD } = searchSlice.actions

export const selectsearch = (state:any) => state.search.words;

export default searchSlice.reducer;