import React from 'react'
import { inject, observer } from 'mobx-react'
import CartItem from '../CartItem'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import { CartItemsContainer } from './styledComponent'

interface CartListProps {
   nxtTrendzStore: NxtTrendzStore
}

const CartListView = observer((props: CartListProps) => {
   const { nxtTrendzStore } = props
   const { cartList } = nxtTrendzStore
   return (
      <CartItemsContainer>
         {cartList.map(eachCartItem => (
            <CartItem
               key={eachCartItem.id}
               cartItemDetails={eachCartItem}
               nxtTrendzStore={nxtTrendzStore}
            />
         ))}
      </CartItemsContainer>
   )
})

export default CartListView
