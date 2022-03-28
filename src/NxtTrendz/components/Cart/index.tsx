import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import {
   FlexCenterContainer,
   HeadingAndRemoveAllContainer,
   HomeContainer,
   OutlineBtn,
   StyledMainHeading
} from '../styledComponents'
import CartSummery from '../CartSummery'
import stores from '../../../Common/stores'

const Cart = inject('nxtTrendzStore')(
   observer(
      (): JSX.Element => {
         const { nxtTrendzStore } = stores
         const { cartList } = nxtTrendzStore
         const showEmptyView = cartList.length === 0

         return (
            <FlexCenterContainer>
               <HomeContainer>
                  <Header />
                  <div>
                     {showEmptyView ? (
                        <EmptyCartView />
                     ) : (
                        <div>
                           <HeadingAndRemoveAllContainer>
                              <StyledMainHeading>My Cart</StyledMainHeading>
                              <OutlineBtn
                                 onClick={
                                    nxtTrendzStore.removeAllCartItemsFromCart
                                 }
                              >
                                 Remove All
                              </OutlineBtn>
                           </HeadingAndRemoveAllContainer>
                           <CartListView />
                           <CartSummery />
                        </div>
                     )}
                  </div>
               </HomeContainer>
            </FlexCenterContainer>
         )
      }
   )
)

export default Cart
