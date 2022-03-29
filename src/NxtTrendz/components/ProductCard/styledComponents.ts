import styled from 'styled-components'

export const ProductImg = styled.img`
   width: 250px;
   @media (max-width: 768px) {
      width: 100%;
   }
`
export const StyledProductCard = styled.li`
   padding: 10px;
   border: 0px;
   border-radius: 8px;
   background-color: #f8f8ff;
   min-width: 180px;
   max-width: 1800px;
   min-height: 250px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   flex-wrap: wrap;
   @media (max-width: 768px) {
      width: 90vw;
   }
`
export const ProductCardTitle = styled.h2`
   font-size: 17px;
   font-weight: bold;
`
export const RatingAndCostContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`
export const ProductPrice = styled.h3`
   font-weight: bold;
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
export const ProductRating = styled.p``

export const ProductBrand = styled.p``
