import React from 'react'
import { inject, observer } from 'mobx-react'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import {
   CartProductBrand,
   CartProductDetailsContainer,
   CartProductImg,
   CartProductQuantity,
   CartProductTitle,
   CartProductTitleBrandContainer,
   CartQualityControlBtn,
   CartQuantityContainer,
   OutlineBtn,
   PriceRemoveContainer,
   RemoveCartItemButton,
   StyledCartItem,
   TotalProductPrice
} from '../styledComponents'
import stores from '../../../Common/stores'

const CartItem = inject('nxtTrendzStore')(
   observer(
      (props): JSX.Element => {
         const { cartItemDetails } = props
         const { nxtTrendzStore } = stores
         const { id } = cartItemDetails
         const removeItemFromCart = () => {
            nxtTrendzStore.removeItem(id)
         }

         return (
            <StyledCartItem>
               <CartProductImg
                  src={cartItemDetails.imageUrl}
                  alt={cartItemDetails.title}
               />
               <CartProductDetailsContainer>
                  <CartProductTitleBrandContainer>
                     <CartProductTitle>
                        {cartItemDetails.title}
                     </CartProductTitle>
                     <CartProductBrand>
                        by {cartItemDetails.brand}
                     </CartProductBrand>
                  </CartProductTitleBrandContainer>
                  <CartQuantityContainer>
                     <CartQualityControlBtn type='button'>
                        <BsDashSquare
                           color='#52606D'
                           size={12}
                           onClick={cartItemDetails.decreaseQuantity}
                        />
                     </CartQualityControlBtn>
                     <CartProductQuantity>
                        {cartItemDetails.ItemQuantity}
                     </CartProductQuantity>
                     <CartQualityControlBtn type='button'>
                        <BsPlusSquare
                           color='#52606D'
                           size={12}
                           onClick={cartItemDetails.increaseQuantity}
                        />
                     </CartQualityControlBtn>
                  </CartQuantityContainer>
                  <PriceRemoveContainer>
                     <TotalProductPrice>
                        Rs{' '}
                        {parseInt(cartItemDetails.price) *
                           cartItemDetails.quantity}
                        /-
                     </TotalProductPrice>
                     <OutlineBtn type='button' onClick={removeItemFromCart}>
                        Remove
                     </OutlineBtn>
                  </PriceRemoveContainer>
               </CartProductDetailsContainer>
               <RemoveCartItemButton type='button' onClick={removeItemFromCart}>
                  <AiFillCloseCircle color='#616E7C' size={20} />
               </RemoveCartItemButton>
            </StyledCartItem>
         )
      }
   )
)

export default CartItem
