import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice'
import langReducer from './langSlice'
import langauage from './languageConstants';

const appStore = configureStore({
    reducer : {
     user :userReducer,
     movies: moviesReducer,
     gpt :gptReducer,
     lang : langReducer
    }
})
 
export default appStore;