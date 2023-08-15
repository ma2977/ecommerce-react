import React, { useEffect } from "react";
import "./styles/cardProduct.css";
import { useNavigate } from "react-router-dom";
import useCrudCart from "../../hooks/useCrudCart";

const CardProduct = ({ product }) => {
    
  const navigate = useNavigate()
  const {addProductToCart} = useCrudCart()
 
  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`)
  }

  //console.log(product)
  const handleBtnClick = (e) => {
    e.stopPropagation()
    //console.log(product.id)
    const data = {
      quantity: 1,
      productId: product.id
    }
    addProductToCart(data)

  }

  return (
    <article className="product" onClick={handleSelectProduct}>
      <header className="product__header">
        <img
          className="product__img product__img-1"
          src={product?.productImgs[0].url}
          alt=""
        />
        {/* <img
          className="product__img product__img-2"
          //src={product?.productImgs[1].url}
          alt=""
        /> */}
      </header>

      <div className="product__body">
        <section className="product__section">
          <h4 className="product__subtitle">{product.brand}</h4>
          <h3 className="product__title">{product.title}</h3>
        </section>
        <div className="product__price">
          <span className="product__price-label">Price</span>
          <span className="product__price-value">{product.price}</span>
        </div>
        <button className="product__btn" onClick={handleBtnClick}>
          <i className="bx bx-cart product__btn-icon"></i>
        </button>
      </div>
    </article>
  );
};

export default CardProduct;
