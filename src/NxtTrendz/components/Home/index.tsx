import React from 'react'
import { withRouter } from 'react-router'
//eslint-disable-next-line  import/named
import { History } from 'history'
import Header from '../Header'
import {
   FlexCenterContainer,
   FlexRowCenterContainer,
   HomeContainer,
   HomeImg,
   HomeImgMobile,
   HomePageDescription,
   StyledButton,
   StyledHomeContentContainer,
   StyledMainHeading
} from './styledComponents'

interface HomeProps {
   history: History
}

const homePageMainHeadingText = 'Clothes That Get YOU Noticed'
const homePageDescriptionText =
   'Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.'
const shopNowBtnText = 'Shop Now'
const homeImgUrl =
   'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'
const homeImgAltText = 'home img'

const Home = (props: HomeProps): JSX.Element => {
   const { history } = props
   const onShopNow = () => history.push('/nxttrendz/products')
   return (
      <FlexCenterContainer>
         <HomeContainer>
            <Header />
            <FlexRowCenterContainer>
               <StyledHomeContentContainer>
                  <FlexRowCenterContainer>
                     <StyledMainHeading>
                        {homePageMainHeadingText}
                     </StyledMainHeading>
                     <HomeImg src={homeImgUrl} alt={homeImgAltText} />
                  </FlexRowCenterContainer>
                  <HomePageDescription>
                     {homePageDescriptionText}
                  </HomePageDescription>
                  <StyledButton onClick={onShopNow}>
                     {shopNowBtnText}
                  </StyledButton>
               </StyledHomeContentContainer>
               <HomeImgMobile src={homeImgUrl} alt={homeImgAltText} />
            </FlexRowCenterContainer>
         </HomeContainer>
      </FlexCenterContainer>
   )
}

export default withRouter(Home)
