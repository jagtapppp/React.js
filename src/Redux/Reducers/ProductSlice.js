import {createSlice} from '@reduxjs/toolkit';   

const initialState = {
    loading : "",
    products : [],
    carts : [],

}

const ProductSlice = createSlice({
    name : "allproducts",
    initialState,
    reducers:{}
})

export default ProductSlice.reducer;