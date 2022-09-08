import {configureStore} from "@reduxjs/toolkit"
import LoadPhotos from "../slice/LoadPhotos";
import SearchTerm from "../slice/SearchTerm";
import LoadSearch from "../slice/LoadSearch";

export const store = configureStore({
    reducer:{
       load: LoadPhotos, 
       search:SearchTerm,
       searchLoad:LoadSearch    
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch