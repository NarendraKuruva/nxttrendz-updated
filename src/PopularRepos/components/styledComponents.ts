import React from 'react'
import styled from 'styled-components'

export const StyledHomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 600px;
`

export const StyledImg = styled.img`
   width: 80px;
`

export const StyledRepoCard = styled.div`
   margin: 5px;
   padding: 10px;
   border: 0px;
   border-radius: 8px;
   background-color: #f8f8ff;
   min-width: 180px;
   max-width: 1800px;
   height: 250px;
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
`

export const FlexRowContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`

export const StyledImgEl = styled.img`
   width: 250px;
`

export const StyledCenterContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const StyledBtn = styled.button`
   padding-left: 25px;
   padding-right: 25px;
   border: ${props => (props.isSelected === true ? `1px solid red` : null)};
   border-radius: ${props => (props.isSelected === true ? `10px` : null)};
   margin: 5px;
`

export const StyledMainHeading = styled.h1`
   font-size: 25px;
   font-family: Lobster;
   font-weight: bolder;
   text-align: center;
`
export const StyledIcon = styled.img`
   width: 15px;
`
export const StyledHeading = styled.h2`
   color: red;
   font-size: 23px;
`
2
