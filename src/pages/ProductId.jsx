import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProducts from '../components/ProductId/SimilarProducts'

const ProductId = () => {

	const { id } = useParams()
  //const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
  const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  	
  const url = `${URL_BASE}/products/${id}`
  
  const [product, getProductById] = useFetch(url)

  useEffect(()=> {
    getProductById()
  },[])

   // console.log(product)
  return (
    <div>
     <SliderImgs product = {product}/>
     <ProductIdInfo product = {product}/>
     <SimilarProducts product = {product}/>
    </div>
    )
  }

export default ProductId