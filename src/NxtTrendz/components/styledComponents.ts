import styled from 'styled-components'

export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
   margin-top: 0px;
`

export const FlexRowCenterContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
export const ProductsHeaderContainer = styled(FlexRowCenterContainer)`
   max-width: 890px;
   width: auto;
   @media (max-width: 768px) {
      width: auto;
      flex-direction: column;
      align-items: flex-start;
   }
`

export const FlexRowContainer = styled.div`
   display: flex;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`
export const FlexRowContainerwithoutMobile = styled(FlexRowContainer)`
   align-items: center;
   @media (max-width: 768px) {
      flex-direction: row;
   }
`
