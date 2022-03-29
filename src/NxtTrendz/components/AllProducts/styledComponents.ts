import styled from 'styled-components'

export const AllProductsLoaderContainer = styled.div`
   display: flex;
   height: 40vh;
   width: 50vw;
   justify-content: center;
   align-items: center;
   text-align: center;
`
export const AllProductsLoaderMainContainer = styled.div``
export const AllProductsMainContainer = styled.div``
export const AllProductsNoProductsFoundContainer = styled.div`
   width: 60vw;
   height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const CenterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const ProductsAndFilterContainer = styled.div`
   display: flex;
   height: 100vh;
   @media (max-width: 768px) {
      flex-direction: column;
      width: 100vw;
      height: auto;
   }
`
export const ProductsContainer = styled.div`
   overflow: auto;
   @media (max-width: 768px) {
      padding: 20px;
   }
`
export const ProductsList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
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
export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
   margin-top: 0px;
`
export const ProductDetailedImg = styled.img`
   width: 50%;
   border-radius: 20px;
   @media (max-width: 768px) {
      width: 100%;
   }
`
