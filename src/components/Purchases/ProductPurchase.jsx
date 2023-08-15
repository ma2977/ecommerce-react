import React from 'react'

const ProductPurchase = ({prodPurchase}) => {
  
  return (
    <div>
        <article>  
            <img src={prodPurchase?.product.productImgs[0].url} alt="" />
            <h3>`${prodPurchase.product.title}`</h3>
            <span>{prodPurchase.quantity}</span>
            <span>{prodPurchase.quantity * prodPurchase.product.price}</span>
        </article>
    </div>
  )
}

export default ProductPurchase