import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'



const ProductIdInfo = ({product}) => {
	
	const [quantity, setQuantity] = useState(1)
	const { addProductToCart } = useCrudCart()

	const handleMinus= ()=>{
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}
	const handlePlus= ()=>{
			setQuantity( quantity + 1)
		}
	//console.log('ProductIdInfo: ')
  //console.log(product)

  const handleAddToCart = () =>{
	const data={
		quantity,
		productId: product.id
	}
	addProductToCart(data)
  }
  return (
    <section>
			<h3>{product?.brand}</h3>
			<h2>{product?.title} </h2>
			<p>{product?.description} </p>
			<footer>
				<div>
					<span>Price </span>
					<span>{product?.price}</span>
				</div>
				<div>
					<span>Quantity</span>
					<div>
						<button onClick={handleMinus}>-</button>
						<div>{quantity}</div>
						<button onClick={handlePlus}>+</button>
					</div>
				</div>
				<button onClick={handleAddToCart}>
					Add to cart <i className='bx bx-cart-add'>
				</i></button>
			</footer>

		</section>
  )
}

export default ProductIdInfo