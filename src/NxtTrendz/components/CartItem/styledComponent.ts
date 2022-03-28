import styled from 'styled-components'

export const StyledCartItem = styled.li`
   display: flex;
   align-items: center;
   background-color: #ffffff;
   padding: 16px;
   margin-bottom: 16px;
   box-shadow: 0px 4px 16px 0px #eaebed;
   @media (max-width: 768px) {
      margin-bottom: 32px;
      padding-left: 36px;
      padding-top: 24px;
      padding-bottom: 24px;
      padding-right: 48px;
   }
`
export const CartProductImg = styled.img`
   width: 96px;
   height: 96px;
   border-radius: 4px;
`
export const CartProductDetailsContainer = styled.div`
   margin-left: 16px;
`
export const CartProductTitleBrandContainer = styled.div`
   @media (max-width: 768px) {
      width: 250px;
   }
`

export const CartProductTitle = styled.p`
   color: #171f46;
   font-family: 'Roboto';
   font-size: 12px;
   font-weight: 500;
   margin-top: 0;
   margin-bottom: 0;

   @media screen and (min-width: 768px) {
      font-size: 16px;
   }
`
export const CartProductBrand = styled.p`
   color: #64748b;
   font-family: 'Roboto';
   font-size: 10px;

   @media screen and (min-width: 768px) {
      font-size: 12px;
   }
`
export const CartQuantityContainer = styled.div`
   display: flex;
   align-items: center;
`
export const CartQualityControlBtn = styled.button`
   padding: 0;
`
export const CartProductQuantity = styled.p`
   color: #52606d;
   font-family: 'Roboto';
   font-size: 12px;
   font-weight: 500;
   margin: 8px;
   line-height: 1.3;

   @media screen and (min-width: 768px) {
      font-size: 18px;
      margin-left: 16px;
      margin-right: 16px;
   }
`
export const TotalProductPrice = styled.p`
   color: #0b69ff;
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 500;
   margin-top: 0;
   margin-bottom: 0;
   min-width: 100px;
`
export const PriceRemoveContainer = styled.div`
   display: flex;
   align-items: center;
`
export const RemoveCartItemButton = styled.button`
   background-color: transparent;
   color: #334155;
   font-family: 'Roboto';
   font-size: 10px;
   line-height: 16px;
   border: none;
   outline: none;
   cursor: pointer;

   @media screen and (min-width: 768px) {
      display: none;
   }
`
export const StyledButton = styled.button`
   color: white;
   border: 0px;
   border-radius: 8px;
   padding: 8px;
   padding-left: 20px;
   padding-right: 20px;
   background-color: #0b69ff;
`

export const RemoveCartItemMobileBtn = styled(StyledButton)`
   // background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   margin-left: 32px;

   @media screen and (max-width: 767px) {
      display: none;
   }
`
export const OutlineBtn = styled.button`
   border: 1px solid #0b69ff;
   color: #0b69ff;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
   margin-top: 10px;
`
