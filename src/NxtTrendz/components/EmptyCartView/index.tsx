import React from 'react'
import { Link } from 'react-router-dom'
import {
   EmptyCartContainer,
   EmptyCartMainHeading,
   ShopNowBtn
} from './styledComponent'

const emptyCartHeadingText = 'Your Cart Is Empty'
const shopNowBtnText = 'Shop Now'
const emptyCartImgLink =
   'https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png'
const emptyCartImgAltText = 'cart empty'
const EmptyCartView = (): JSX.Element => (
   <EmptyCartContainer>
      <img src={emptyCartImgLink} alt={emptyCartImgAltText} />
      <EmptyCartMainHeading>{emptyCartHeadingText}</EmptyCartMainHeading>

      <Link to='/nxttrendz/products'>
         <ShopNowBtn type='button'>{shopNowBtnText}</ShopNowBtn>
      </Link>
   </EmptyCartContainer>
)

export default EmptyCartView
