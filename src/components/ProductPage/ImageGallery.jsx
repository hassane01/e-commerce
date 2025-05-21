import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaShare, FaShoppingCart } from 'react-icons/fa'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { TbHeartPlus } from 'react-icons/tb'
import ImagesContainer from './Imagegallerycompo/ImagesContainer'
import ProductDetaill from './Imagegallerycompo/ProductDetaill'

const ImageGallery = ({productInfo , setSelectedImage ,selectedImage , renderStars  , setSelectedColor , selectedColor , selectedSize , setSelectedSize , handleQuantityChange ,quantity }) => {
  return (
    <div className="lg:flex lg:space-x-8">
    {/* Image Gallery */}
    <ImagesContainer {...{selectedImage , setSelectedImage , productInfo  }}/>

    {/* Product Details */}
    <ProductDetaill {... {productInfo , renderStars , selectedColor , selectedSize , setSelectedColor , setSelectedSize, handleQuantityChange  , quantity }}/>
  </div>
  )
}

export default ImageGallery