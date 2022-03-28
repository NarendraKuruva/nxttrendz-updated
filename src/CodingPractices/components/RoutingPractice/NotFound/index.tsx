import React from 'react'
import './index.css'
import { StyledContainer } from '../styledComponents'

const NotFound = (): React.ReactElement => (
   <StyledContainer>
      <img
         src='https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
         alt='not found'
      />
      <h1>Not Found</h1>
   </StyledContainer>
)

export default NotFound
