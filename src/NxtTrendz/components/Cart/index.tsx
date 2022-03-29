import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartSummery from '../CartSummery'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import {
   EmptyCartMainContainer,
   HeadingAndRemoveAllMainContainer,
   FlexCenterContainer,
   HomeContainer,
   HeadingAndRemoveAllContainer,
   StyledMainHeading,
   OutlineBtn
} from './styledComponents'

const myCartHeadingText = 'My Cart'
const removeAllBtnText = 'Remove All'

interface CartProps {
   nxtTrendzStore: NxtTrendzStore
}

const Cart = inject('nxtTrendzStore')(
   observer(
      (props: CartProps): JSX.Element => {
         const { nxtTrendzStore } = props
         const { cartList } = nxtTrendzStore
         const showEmptyView = cartList.length === 0

         return (
            <FlexCenterContainer>
               <HomeContainer>
                  <Header />
                  <EmptyCartMainContainer>
                     {showEmptyView ? (
                        <EmptyCartView />
                     ) : (
                        <HeadingAndRemoveAllMainContainer>
                           <HeadingAndRemoveAllContainer>
                              <StyledMainHeading>
                                 {myCartHeadingText}
                              </StyledMainHeading>
                              <OutlineBtn
                                 onClick={
                                    nxtTrendzStore.removeAllCartItemsFromCart
                                 }
                              >
                                 {removeAllBtnText}
                              </OutlineBtn>
                           </HeadingAndRemoveAllContainer>
                           <CartListView nxtTrendzStore={nxtTrendzStore} />
                           <CartSummery nxtTrendzStore={nxtTrendzStore} />
                        </HeadingAndRemoveAllMainContainer>
                     )}
                  </EmptyCartMainContainer>
               </HomeContainer>
            </FlexCenterContainer>
         )
      }
   )
)

export default Cart
