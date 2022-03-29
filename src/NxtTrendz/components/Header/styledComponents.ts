import styled from 'styled-components'

export const CartItemsCountBadge = styled.span`
   background-color: #bfdbfe;
   color: #0967d2;
   font-family: 'Roboto';
   font-size: 12px;
   font-weight: 500;
   border-radius: 50%;
   padding-left: 5px;
   padding-top: 2px;
   padding-right: 5px;
   padding-bottom: 2px;
   margin-left: 8px;

   @media screen and (min-width: 768px) {
      background-color: #e6f6ff;
   }
`
export const FlexRowCenterContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
export const HeaderContainer = styled(FlexRowCenterContainer)`
   padding-top: 20px;
   padding-bottom: 15px;
   margin-bottom: 5px;
   border-bottom: 1px solid;
   @media screen and (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
      border-bottom: none;
   }
`

export const HeaderListContainer = styled.ul`
   @media screen and (max-width: 768px) {
      display: none;
   }
`

export const HeaderListItem = styled.li``
export const Logo = styled.img`
   width: 150px;
   @media screen and (max-width: 768px) {
      width: 110px;
   }
`
export const LogoutButton = styled.button`
   color: white;
   background-color: #0b69ff;
   border: 0px;
   padding: 5px;
   border-radius: 5px;
   @media screen and (max-width: 768px) {
      display: none;
   }
`
export const LogoutButtonContainerMobile = styled.div`
   @media screen and (min-width: 768px) {
      display: none;
   }
`
export const HeaderElementsMobile = styled.div`
   @media screen and (min-width: 768px) {
      display: none;
   }
   display: flex;
   background-color: #e2f6fd;
   justify-content: space-between;
   padding: 10px;
`
export const HeaderElementsMobileImg = styled.img`
   width: 30px;
`
