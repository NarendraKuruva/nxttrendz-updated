import React from 'react'
import './index.css'
import { StyledContainer } from '../styledComponents'
import Header from '../Header'

interface ContainerProps {
   className?: string
}

const Contact = ({
   className = 'contact-container'
}: ContainerProps): React.ReactElement => (
   <StyledContainer className={className}>
      <Header />
      <img
         src='https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'
         alt='contact'
      />
      <h1>Contact</h1>
   </StyledContainer>
)

export default Contact
