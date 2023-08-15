import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers:{
        setProductsGlobal: (state, action) => action.payload
    }
})
 
export default productsSlice.reducer

export const { setProductsGlobal } = productsSlice.actions

// export const getAllProductsThunk = (url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products') => dispatch => {
//     const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
//     axios.get(url)
//         .then(res => dispatch(setProductsGlobal(res.data)))
//         .catch(err => console.log(err))
// }

const URL_BASE = import.meta.env.VITE_REACT_APP_URL

export const getAllProductsThunk = (url = `${URL_BASE}/products`) => dispatch => {
    axios.get(url)
    .then(res => dispatch(setProductsGlobal(res.data)))
    .catch(err => console.log(err))
}