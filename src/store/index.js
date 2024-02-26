import { configureStore } from '@reduxjs/toolkit'; 
import dynamicSlice from './dynamicSlice'; 

const store = configureStore ({
    reducer : {
        dynamic : dynamicSlice
    }
}); 

export default store; 