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
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

const productReducer = productSlice.reducer;
export const { setProducts, setStatus } = productSlice.actions;
export default productReducer;




export function fetchProducts() {
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(statuses.loading))
        try {
            dispatch(setStatus(statuses.loading))
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();

            dispatch(setProducts(data));
            dispatch(setStatus(statuses.idle));
        } catch (error) {
            console.log(error)
            dispatch(setStatus(statuses.error))
        }
    }
}