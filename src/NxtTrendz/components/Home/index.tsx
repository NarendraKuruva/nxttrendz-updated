import React from 'react'
import { withRouter } from 'react-router'
//eslint-disable-next-line  import/named
import { History } from 'history'
import Header from '../Header'
import {
   FlexCenterContainer,
   FlexRowCenterContainer,
   HomeContainer,
   StyledButton,
   StyledHomeContentContainer,
   StyledMainHeading
} from '../styledComponents'

interface HomeProps {
   history: History
}

const Home = (props: HomeProps): JSX.Element => {
   const { history } = props
   const onShopNow = () => history.push('/nxttrendz/products')
   return (
      <FlexCenterContainer>
         <HomeContainer>
            <Header />
            <FlexRowCenterContainer>
               <StyledHomeContentContainer>
                  <StyledMainHeading>
                     Clothes That Get YOU Noticed
                  </StyledMainHeading>
                  <p>
                     Fashion is part of the daily air and it does not quite help
                     that it changes all the time. Clothes have always been a
                     marker of the era and we are in a revolution. Your fashion
                     makes you been seen and heard that way you are. So,
                     celebrate the seasons new and exciting fashion in your own
                     way.
                  </p>
                  <StyledButton onClick={onShopNow}>Shop Now</StyledButton>
               </StyledHomeContentContainer>
               <img
                  src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'
                  alt='home img'
               />
            </FlexRowCenterContainer>
         </HomeContainer>
      </FlexCenterContainer>
   )
}

export default withRouter(Home)
