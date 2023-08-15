import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import CardProduct from '../Home/CardProduct' 


const SimilarProducts = ({product}) => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`

  //const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
  const [filterProducts, getProductByCategory] = useFetch(url)

  useEffect(() => {
    if (product) {
      getProductByCategory()
    }
  }, [product])

  console.log(filterProducts)

  return (
    <div><h3>
      SimilarProducts of product.categoryId : {product?.categoryId}
      </h3>
    <div>
      {
        filterProducts?.map(prod =>{
          if (prod.id != product.id) {
            return (
            <CardProduct key = {prod.id} product={prod}/>
            )
          }
        }

        )
      }
    </div>
    
    </div>
  )
}

export default SimilarProducts