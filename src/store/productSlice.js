import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = statuses.loading;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = statuses.idle;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = statuses.error;
            })

    }
});

const productReducer = productSlice.reducer;
export const { setProducts, setStatus } = productSlice.actions;
export default productReducer;



// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch, getState) {
//         dispatch(setStatus(statuses.loading))
//         try {
//             dispatch(setStatus(statuses.loading))
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json();

//             dispatch(setProducts(data));
//             dispatch(setStatus(statuses.idle));
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(statuses.error))
//         }
//     }
// }



export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    return data;
})