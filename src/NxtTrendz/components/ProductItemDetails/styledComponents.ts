import styled from 'styled-components'

export const ProductDetailedViewMainContainer = styled.div`
   padding-top: 20px;
   width: 1200px;
   @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
      width: auto;
   }
`
export const ProductItemContentContainer = styled.div`
   display: flex;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`

export const StyledProductItemDetails = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding-left: 50px;
   @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
   }
`
export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
   margin-top: 0px;
`
export const HeadingTwo = styled.h2`
   font-size: 17px;
   font-weight: bold;
`
export const RatingAndCostContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`
export const RatingContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: #3b82f6;
   color: #ffffff;
   padding: 5px;
   border-radius: 8px;
   padding-left: 15px;
   padding-right: 15px;
`
export const StyledStarIconContainer = styled.div``

export const StyledStarIcon = styled.img`
   width: 25px;
   margin-left: 5px;
`
export const StyledParagraph = styled.p`
   color: ${props => props.color};
   font-size: ${props => props.size}px;
   margin-left: ${props => props.ml}px;
`
export const CounterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 150px;
   margin-top: 10px;
   margin-bottom: 10px;
   @media (max-width: 768px) {
   }
`
export const SimilarProductsMainContainer = styled.div`
   display: flex;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`
export const IncreaseDecreaseBtn = styled.button`
   border: 1px solid;
   height: 30px;
   width: 30px;
`
export const AddToCartBtnContainer = styled.div``
export const CenterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const ProductItemCenterContainer = styled.div`
   display: flex;
   justify-content: center;
`
export const StyledSpanElement = styled.span`
   font-weight: bolder;
   color: black;
`
export const ContinueShoppingButton = styled.button`
   color: white;
   border: 0px;
   border-radius: 8px;
   padding: 8px;
   padding-left: 20px;
   padding-right: 20px;
   background-color: #0b69ff;
`
export const AddToCartButton = styled.button`
   color: white;
   background-color: #0b69ff;
   border: 0px;
   padding: 5px;
   border-radius: 5px;
`
export const ProductItemLoaderContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const ProductDescription = styled.p`
   color: #7e898d;
   font-size: 20px;
`
export const TotalReviews = styled.p`
   margin-left: 15px;
`
export const ProductRating = styled.p``
export const ProductAvailability = styled.p`
   color: #7e898d;
`
export const ProductBrand = styled.p``
export const HorizontalLine = styled.hr``
export const ProductDetailedImg = styled.img`
   width: 50%;
   border-radius: 20px;
   margin-top: 10px;
   @media (max-width: 768px) {
      width: 100%;
   }
`
