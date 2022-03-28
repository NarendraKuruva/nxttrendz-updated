import styled from 'styled-components'
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
export const EmptyCartMainContainer = styled.div``
export const HeadingAndRemoveAllMainContainer = styled.div``

export const HeadingAndRemoveAllContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const StyledMainHeading = styled.h1`
   font-weight: bold;
   font-size: 35px;
   font-style: 'Bree Serif';
   margin-top: 0px;
`
export const OutlineBtn = styled.button`
   border: 1px solid #0b69ff;
   color: #0b69ff;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 8px;
   margin-top: 10px;
`
