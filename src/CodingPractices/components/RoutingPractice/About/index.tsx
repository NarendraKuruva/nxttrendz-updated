import React from 'react'
import './index.css'
import { StyledContainer } from '../styledComponents'
import Header from '../Header'

const About = (): React.ReactElement => (
   <StyledContainer>
      <Header />
      <img
         src='https://assets.ccbp.in/frontend/react-js/about-blog-img.png'
         alt='about'
      />
      <h1>About</h1>
      <p>I love to create! I am a frontend web developer</p>
   </StyledContainer>
)
export default About
