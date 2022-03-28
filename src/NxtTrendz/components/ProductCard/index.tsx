import React from 'react'
import { Link } from 'react-router-dom'
import {
   HeadingTwo,
   ProductImg,
   RatingAndCostContainer,
   RatingContainer,
   StyledHeadingThree,
   StyledProductCard,
   StyledStarIcon,
   StyledStarIconContainer
} from '../styledComponents'

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

   return (
      <Link to={`/nxttrendz/products/${id}`}>
         <StyledProductCard>
            <ProductImg src={imageUrl} alt='product' />
            <HeadingTwo>{title}</HeadingTwo>
            <p>by {brand}</p>
            <RatingAndCostContainer>
               <StyledHeadingThree>Rs {price}/-</StyledHeadingThree>
               <RatingContainer>
                  <p>{rating}</p>
                  <StyledStarIconContainer>
                     <StyledStarIcon
                        src='https://assets.ccbp.in/frontend/react-js/star-img.png'
                        alt='star'
                     />
                  </StyledStarIconContainer>
               </RatingContainer>
            </RatingAndCostContainer>
         </StyledProductCard>
      </Link>
   )
}
export default ProductCard
