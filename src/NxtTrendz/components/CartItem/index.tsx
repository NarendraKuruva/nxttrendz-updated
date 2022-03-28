import React from 'react'
import { inject, observer } from 'mobx-react'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import CartItemModel from '../../stores/models/CartItemModel'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
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
} from './styledComponent'

interface CartItemProps {
   cartItemDetails: CartItemModel
   nxtTrendzStore: NxtTrendzStore
}

const CartItem = inject('nxtTrendzStore')(
   observer(
      (props: CartItemProps): JSX.Element => {
         const { cartItemDetails } = props
         const { nxtTrendzStore } = props
         const {
            id,
            imageUrl,
            title,
            brand,
            ItemQuantity,
            price,
            quantity,
            decreaseQuantity,
            increaseQuantity
         } = cartItemDetails
         const removeItemFromCart = () => {
            nxtTrendzStore.removeItem(id)
         }
         const totalPriceText = `Rs ${parseInt(price) * quantity}/-`
         const brandTextContent = `by ${brand}`
         const removeBtnText = 'Remove'
         return (
            <StyledCartItem>
               <CartProductImg src={imageUrl} alt={title} />
               <CartProductDetailsContainer>
                  <CartProductTitleBrandContainer>
                     <CartProductTitle>{title}</CartProductTitle>
                     <CartProductBrand>{brandTextContent}</CartProductBrand>
                  </CartProductTitleBrandContainer>
                  <CartQuantityContainer>
                     <CartQualityControlBtn type='button'>
                        <BsDashSquare
                           color='#52606D'
                           size={12}
                           onClick={decreaseQuantity}
                        />
                     </CartQualityControlBtn>
                     <CartProductQuantity>{ItemQuantity}</CartProductQuantity>
                     <CartQualityControlBtn type='button'>
                        <BsPlusSquare
                           color='#52606D'
                           size={12}
                           onClick={increaseQuantity}
                        />
                     </CartQualityControlBtn>
                  </CartQuantityContainer>
                  <PriceRemoveContainer>
                     <TotalProductPrice>{totalPriceText}</TotalProductPrice>
                     <OutlineBtn type='button' onClick={removeItemFromCart}>
                        {removeBtnText}
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
