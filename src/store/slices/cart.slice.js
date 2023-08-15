import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

 const cartSlice = createSlice({ 
    name: "cartSlice",
    initialState: null,
    reducers:{
        setCartGlobal: (state, action) => action.payload
    }
 })

 export default cartSlice.reducer
 export const {setCartGlobal} = cartSlice.actions

 export const getAllProductsCartThunk = () => dispatch => { 
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  	
    const url = `${URL_BASE}/cart`
    
    axios.get(url, getConfigToken())
        .then(res =>  dispatch(setCartGlobal(res.data))) 
        .catch(err => console.log(err))
    
 }