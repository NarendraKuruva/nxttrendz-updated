import React from 'react'
import styled from 'styled-components'

export const StyledRegistrationForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   box-shadow: 0px 4px 16px 0px #bfbfbf;
   width: auto;
   padding: 10px;
   justify-content: center;
`
export const StyledInput = styled.input`
   border: ${props =>
      props.isEmpty ? `1px solid #ff0b37` : `1px solid #9aa5b1`};
   background-color: ${props => (props.isEmpty ? `#fef2f4` : `#cbd2d9`)};
   padding: 10px;
   border-radius: 5px;
`
export const StyledSubmitButton = styled.button`
   color: white;
   border: 0px;
   border-radius: 8px;
   padding-left: 15px;
   padding-right: 15px;
   cursor: pointer;
   outline: none;
   background-color: #ea580c;
   margin-top: 10px;
`
export const StyledHeading = styled.h1`
   color: #ea580c;
   font-size: 30px;
   font-family: Roboto;
   font-weight: bold;
`
export const CenterContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
export const ColumnAlignContainer = styled.div`
   display: flex;
   flex-direction: column;
`
export const SuccessImg = styled.img`
   width: 50px;
`

export const HeaderContainer = styled.div`
   width: 97vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #cbd5e1;
   padding: 30px;
   font-size: 30px;
   font-weight: bolder;
`
export const FooterContainer = styled(HeaderContainer)``

export const LeftNavbarContainer = styled.div`
   background-color: #e2e8f0;
   width: 20vw;
   padding: 20px;
   margin: 5px;
   height: 60vh;
`
export const RightNavbarContainer = styled(LeftNavbarContainer)``

export const ContentContainer = styled.div`
   background-color: #f1f5f9;
   padding: 20px;
   margin: 5px;
   height: 60vh;
   width: 58vw;
`
export const FlexRowContainer = styled.div`
   display: flex;
`
export const FlexColumnContainer = styled.div`
   display: flex;
   flex-direction: column;
`
export const FlexCenterContainer = styled.div`
   display: flex;
   align-items: center;
`

export const ContentContainerMain = styled.div`
   height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin: 20px;
   margin-top: 20px;
   // flex-wrap: wrap;
`
export const MainHeaderContainer = styled.div`
   background-color: #475569;
   color: white;
   padding: 15px;
`
