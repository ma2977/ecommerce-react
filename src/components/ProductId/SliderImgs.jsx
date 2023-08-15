import React, { useState } from 'react'
import ('./styles/sliderImgs.css')

const SliderImgs = ({product}) => {

	const [imgShown, setImgShown] = useState(0)

	const objStyle = {
		transform: `translateX(calc(-${imgShown}/3 * 100%))`
	}

	const onClickLeft = ()=>{
		if(imgShown -1 < 0 ){
			setImgShown(product?.images.length - 1)
		}else{
			setImgShown(imgShown - 1)
		}

	}

	const onClickRight = ()=>{
		if (imgShown + 1 === product?.images.length) {
			setImgShown(0)
		}else{
			setImgShown(imgShown + 1)
		}

	}

  return (
    <div className='slider'>
		<button onClick={onClickLeft} className='slider__arrowhead slider__left'>&lt;</button>
	  	<div style={objStyle} className='slider__interior'>	
			{
				product?.productImgs.map((imgInfo) => (
					<div className="slider__img-container">
						<img className='slider__img'
						 key={imgInfo.id}
						 src={imgInfo.url} alt="" />
					</div>
				))
			}	
	  	</div>	
	  <button onClick={onClickRight} className='slider__arrowhead slider__right'>&gt;</button>
    </div>
  )
}

export default SliderImgs
