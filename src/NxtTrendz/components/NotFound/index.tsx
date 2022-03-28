import React from 'react'
import { CenterContainer } from '../styledComponents'

const NotFound = (): JSX.Element => (
   <CenterContainer className='not-found-container'>
      <img
         src='https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
         alt='not-found'
      />
   </CenterContainer>
)

export default NotFound
