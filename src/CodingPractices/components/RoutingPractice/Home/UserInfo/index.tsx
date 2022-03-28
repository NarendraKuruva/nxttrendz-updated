import React from 'react'
import './index.css'
import { StyledContainer } from '../../styledComponents'
const UserInfo = (): JSX.Element => (
   <StyledContainer>
      <img
         src='https://assets.ccbp.in/frontend/react-js/profile-img.png'
         alt='profile'
      />
      <h1 className='heading'>Narendra</h1>
      <p>Software Developer at US</p>
   </StyledContainer>
)

export default UserInfo
