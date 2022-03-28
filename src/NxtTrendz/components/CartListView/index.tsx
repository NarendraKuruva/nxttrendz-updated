import React from 'react'
import { inject, observer } from 'mobx-react'
import CartItem from '../CartItem'
import { CartItemsContainer } from '../styledComponents'
import stores from '../../../Common/stores'

const CartListView = inject('nxtTrendzStore')(
   observer(() => {
      const { nxtTrendzStore } = stores
      const { cartList } = nxtTrendzStore
      return (
         <CartItemsContainer>
            {cartList.map(eachCartItem => (
               <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
         </CartItemsContainer>
      )
   })
)

export default CartListView
