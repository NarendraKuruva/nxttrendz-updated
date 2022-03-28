import React from 'react'
import { inject, observer } from 'mobx-react'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import {
   CartSummeryContainer,
   CartSummeryHeading,
   CartSummeryMainContainer,
   CheckoutButton
} from './styledComponent'

interface CartSummeryProps {
   nxtTrendzStore: NxtTrendzStore
}

const CartSummery = inject('nxtTrendzStore')(
   observer(
      (props: CartSummeryProps): JSX.Element => {
         const { nxtTrendzStore } = props
         const { cartList } = nxtTrendzStore
         const cartCount = cartList.length
         let totalPrice = 0
         {
            cartList.map(eachItem => {
               totalPrice += eachItem.quantity * parseInt(eachItem.price)
            })
         }
         const orderTotalText = `${cartCount} items in cart`
         const totalAmountText = `Order Total:${totalPrice}/-`
         const checkoutBtnText = 'Checkout'
         return (
            <CartSummeryMainContainer>
               <CartSummeryContainer>
                  <CartSummeryHeading>{totalAmountText}</CartSummeryHeading>
                  <p>{orderTotalText}</p>
                  <CheckoutButton>{checkoutBtnText}</CheckoutButton>
               </CartSummeryContainer>
            </CartSummeryMainContainer>
         )
      }
   )
)
export default CartSummery
