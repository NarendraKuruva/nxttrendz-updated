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
