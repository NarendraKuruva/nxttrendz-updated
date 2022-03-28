import React from 'react'
import { inject, observer } from 'mobx-react'
import {
   CartSummeryContainer,
   HeadingTwo,
   StyledButton,
   StyledCartSummery
} from '../styledComponents'
import stores from '../../../Common/stores'

const CartSummery = inject('nxtTrendzStore')(
   observer(
      (): JSX.Element => {
         const { nxtTrendzStore } = stores
         const { cartList } = nxtTrendzStore
         const cartCount = cartList.length
         let totalPrice = 0
         {
            cartList.map(eachItem => {
               totalPrice += eachItem.quantity * parseInt(eachItem.price)
            })
         }
         return (
            <CartSummeryContainer>
               <StyledCartSummery>
                  <HeadingTwo>Order Total:{totalPrice}/-</HeadingTwo>
                  <p>{cartCount} items in cart</p>
                  <StyledButton>Checkout</StyledButton>
               </StyledCartSummery>
            </CartSummeryContainer>
         )
      }
   )
)
export default CartSummery
