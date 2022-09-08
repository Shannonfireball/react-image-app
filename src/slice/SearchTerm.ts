import { createSlice } from "@reduxjs/toolkit";

export const SearchTermSlice:any = createSlice({
    name:'SearchTerm',
    initialState:'',
    reducers:{
        setSearchTerm:(state,action)=>{
            return action.payload
        },
        clearSearchTerm:(state,action)=>{
            return state = ''

    }
}});

export const selectSearchTerm = (state:any) => state.SearchTerm;

export const {
    setSearchTerm,
    clearSearchTerm,
 } = SearchTermSlice.actions;

export default SearchTermSlice.reducer;