import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

 const cartSlice = createSlice({ //este estado es para guardar el contenido del carrito de compras.
    name: "cartSlice",
    initialState: null,
    reducers:{
        setCartGlobal: (state, action) => action.payload
    }//el state sirve para guardar el valor actual del estado
    //el action.payload es el valor que envía el usuario por parámetro(el form)
 })

 export default cartSlice.reducer
 export const {setCartGlobal} = cartSlice.actions

 export const getAllProductsCartThunk = () => dispatch => { 
    //const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'  // de la documentación sacamos la url del get
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  	
    const url = `${URL_BASE}/cart`
    
    axios.get(url, getConfigToken())
        .then(res =>  dispatch(setCartGlobal(res.data))) // al llamar a getAllProductsCartThunk() se guarda 
        .catch(err => console.log(err))
    
 }