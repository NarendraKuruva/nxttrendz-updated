import React from 'react'
import { Link } from 'react-router-dom'

import {
   ProductBrand,
   ProductCardTitle,
   ProductImg,
   ProductRating,
   RatingAndCostContainer,
   RatingContainer,
   ProductPrice,
   StyledProductCard,
   StyledStarIcon,
   StyledStarIconContainer
} from './styledComponents'

const starIconImgUrl = 'https://assets.ccbp.in/frontend/react-js/star-img.png'
const starIconImgAltText = 'star'

interface ProductCardProps {
   productDetails: {
      title: string
      brand: string
      imageUrl: string
      rating: string
      price: string
      id: string
   }
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
   const { productDetails } = props
   const { title, brand, imageUrl, rating, price, id } = productDetails
   const brandText = `by ${brand}`
   const priceText = `Rs ${price}/-`
   return (
      <Link to={`/nxttrendz/products/${id}`}>
         <StyledProductCard>
            <ProductImg src={imageUrl} alt='product' />
            <ProductCardTitle>{title}</ProductCardTitle>
            <ProductBrand>{brandText}</ProductBrand>
            <RatingAndCostContainer>
               <ProductPrice>{priceText}</ProductPrice>
               <RatingContainer>
                  <ProductRating>{rating}</ProductRating>
                  <StyledStarIconContainer>
                     <StyledStarIcon
                        src={starIconImgUrl}
                        alt={starIconImgAltText}
                     />
                  </StyledStarIconContainer>
               </RatingContainer>
            </RatingAndCostContainer>
         </StyledProductCard>
      </Link>
   )
}
export default ProductCard
