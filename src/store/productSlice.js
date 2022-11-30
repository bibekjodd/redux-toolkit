import { createSlice } from "@reduxjs/toolkit";

const statuses = Object.freeze({
    idle: 'idle',
    error: 'error',
    loading: 'loading',
});



const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: statuses.idle,

    },

    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        }
    }
});

const productReducer = productSlice.reducer;
export default productReducer;