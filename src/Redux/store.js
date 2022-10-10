import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from './Reducers/ProductSlice';

const store = configureStore({
    reducer:{
     products: ProductSlice,
    },
})
export default store;