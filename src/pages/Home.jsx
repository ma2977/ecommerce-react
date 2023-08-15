import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct' 
import './styles/home.css'
import FilterCategory from '../components/FilterCategory'

const Home = () => {

  const { productsGlobal } = useSelector(state => state)

  const [inputValue, setInputValue] = useState('')
  const input = useRef()

  const hangleChangeInput = () =>{
    setInputValue(input.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().includes(inputValue))

  return (
    <div className='home'>
        <input ref={input} onChange={hangleChangeInput} type="text" />
        <FilterCategory />

        <section className='home__cards'>
            {
                productFilter?.map(prod => (
                    <CardProduct 
                        key={prod.id}
                        product={prod}
                    />
                ))
            }
        </section>
    </div>
  )
}

export default Home