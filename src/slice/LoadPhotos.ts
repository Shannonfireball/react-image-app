import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { GetDataPhotos } from "../UnsplashApi/UnsplashApi";


// createAsyncThunk simplifies our Redux app by returning an action creator that dispatches promise lifecycle actions for us so we don't have to dispatch them ourselves.
export const LoadPhotos:any = createAsyncThunk(
  "allPhotos/LoadPhotos",
  async () => {

    return GetDataPhotos();

  }
);

const sliceOptions = {
  name: "allPhotos",
  initialState: {
    photos:[],
    isLoading: false,
    hasError: false
  },
  reducers: {
    AddWORD:(state:any,action:any)=>{
      state.photos.push(action.payload)
    }
  },
  extraReducers: {
    [LoadPhotos.pending]: (state:any, action:any) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [LoadPhotos.fulfilled]: (state:any, action:any) => {
      state.photos = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [LoadPhotos.rejected]: (state:any, action:any) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const allPhotosSlice = createSlice(sliceOptions);

export const { AddWORD } = allPhotosSlice.actions

export const selectallPhotos = (state:any) => state.allPhotos.words;

export default allPhotosSlice.reducer;