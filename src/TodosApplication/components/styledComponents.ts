import React from 'react'
import styled from 'styled-components'

export const StyledTodosMainContainer = styled.div`
   background-color: #f9fbfe;
   height: 100vh;
   padding: 30px;
`
export const TodosMainHeading = styled.h1`
   text-align: center;
   font-family: 'Roboto';
   font-size: 46px;
   font-weight: 500;
   margin-top: 20px;
   margin-bottom: 20px;
`
export const CreateTodoHeading = styled.h1`
   font-family: 'Roboto';
   font-size: 32px;
   font-weight: 700;
`
export const CreateTodoHeadingSubpart = styled.span`
   font-family: 'Roboto';
   font-size: 32px;
   font-weight: 500;
`

export const TodosListContainer = styled.ul`
   margin: 0px;
   padding: 0px;
   display: flex;
   flex-wrap: wrap;
`

export const TodoUserInput = styled.input`
   background-color: white;
   width: 100%;
   border-style: solid;
   border-width: 1px;
   border-color: #e4e7eb;
   border-radius: 10px;
   margin-top: 10px;
   padding: 15px;
`
export const AddTodoButton = styled.button`
   color: white;
   background-color: #4c63b6;
   font-family: 'Roboto';
   font-size: 18px;
   border-width: 0px;
   border-radius: 4px;
   margin-top: 20px;
   margin-bottom: 50px;
   padding-top: 5px;
   padding-bottom: 5px;
   padding-right: 20px;
   padding-left: 20px;
`

export const TodoItemContainer = styled.li`
   margin-top: 15px;
   display: flex;
   flex-direction: row;
`

export const StyledCheckboxInput = styled.input`
   width: 20px;
   height: 20px;
   margin-top: 12px;
   margin-right: 12px;
`

export const StyledLabelContainer = styled.div`
   background-color: #e6f6ff;
   width: 100%;
   border-style: solid;
   border-width: 5px;
   border-color: #096f92;
   border-right: none;
   border-top: none;
   border-bottom: none;
   border-radius: 4px;
   display: flex;
   align-items: center;
   width: 300px;
   // @media screen and (min-width: 768px) {
   //    // background-color: #e6f6ff;
   //    width
   // }
`
export const StyledTodoLabel = styled.label`
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 400;
   width: 82%;
   margin: 0px;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: 5px;
   text-decoration: ${props => (props.isChecked ? `line-through` : `none`)};
`
export const StyledDeleteContainer = styled.div`
   text-align: right;
   width: 18%;
`
