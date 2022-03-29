import styled from 'styled-components'

export const HomePageDescription = styled.p``

export const FlexCenterContainer = styled.div`
   display: flex;
   justify-content: center;
`
export const HomeContainer = styled.div`
   width: 1200px;
   @media (max-width: 768px) {
      width: auto;
   }
`
export const FlexRowCenterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media (max-width: 768px) {
      flex-direction: column;
      padding: 15px;
   }
`
export const StyledHomeContentContainer = styled.div`
   @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
   }
`

export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
   margin-top: 0px;
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

export const HomeImg = styled.img`
   @media (min-width: 768px) {
      display: none;
   }
`
export const HomeImgMobile = styled.img`
   @media (max-width: 768px) {
      display: none;
   }
`
