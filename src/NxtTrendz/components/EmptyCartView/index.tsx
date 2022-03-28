import React from 'react'
import { Link } from 'react-router-dom'
import {
   EmptyContainer,
   StyledButton,
   StyledMainHeading
} from '../styledComponents'

const EmptyCartView = (): JSX.Element => (
   <EmptyContainer>
      <img
         src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png'
         alt='cart empty'
      />
      <StyledMainHeading>Your Cart Is Empty</StyledMainHeading>

      <Link to='/nxttrendz/products'>
         <StyledButton type='button'>Shop Now</StyledButton>
      </Link>
   </EmptyContainer>
)

export default EmptyCartView
