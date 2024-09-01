import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState:{
      gptBtn : false
    },
    reducers :{
        addBtnClick :(state,action) => {
          state.gptBtn = !state.gptBtn
        }
    }
})

export const { addBtnClick } = gptSlice.actions
export default gptSlice.reducer