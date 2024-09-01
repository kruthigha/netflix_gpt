import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState :{
        lang : "English"
    },
    reducers :{
        selectedLanguage : (state,action)=>{
            state.lang = action.payload
        }
    }
})

export const { selectedLanguage } = langSlice.actions
export default langSlice.reducer
