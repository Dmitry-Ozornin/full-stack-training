import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./cardSlice";

export const store =configureStore({
    reducer:{
        data: dataReducer
        
    }
})
