import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import './styles/cart.css'
import usePurchases from '../hooks/usePurchases'

const Cart = () => {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllProductsCartThunk())
	},[])

  const {cartGlobal} = useSelector(state => state)
  //console.log(cartGlobal)

  const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price ,0)
  console.log( `totalPriceCart: ${totalPriceCart}`)

  const { buyThisCart } = usePurchases()

  const handlePurchase = ()=> {
    buyThisCart()
  }

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {
          cartGlobal?.map(prodCart => (
            <ProductInCart key={prodCart.id } prodCart={prodCart} />

          ))
        }
      </div>
      <footer>
        <span>Total:</span>
        <h3>{totalPriceCart}</h3>
        <button onClick={handlePurchase} className='cart__btn'>Buy now</button>
      </footer>
    </div>
    

  )
}

export default Cart