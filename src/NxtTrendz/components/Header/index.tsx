import React from 'react'
import Cookies from 'js-cookie'
//eslint-disable-next-line  import/named
import { History } from 'history'
import { Link, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { MdLogout, MdHome } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import stores from '../../../Common/stores'

import {
   CartItemsCountBadge,
   FlexRowCenterContainer,
   HeaderContainer,
   HeaderElementsMobile,
   HeaderElementsMobileImg,
   HeaderListContainer,
   HeaderListItem,
   Logo,
   LogoutButton,
   LogoutButtonContainerMobile
} from './styledComponents'

interface Props {
   history: History
}

const headerHomeOptionText = 'Home'
const headerProductsOptionText = 'Products'
const logoutBtnText = 'Logout'
const logoUrl =
   'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
const logoAltText = 'logo'

const Header = observer(
   (props: Props): JSX.Element => {
      const { history } = props

      const renderCartItemsCount = () => {
         const { nxtTrendzStore } = stores
         const { cartList, cartCount } = nxtTrendzStore
         const cartItemsCount = cartList.length
         return (
            <>
               {cartItemsCount > 0 ? (
                  <CartItemsCountBadge>{cartCount}</CartItemsCountBadge>
               ) : null}
            </>
         )
      }
      const onLogout = (): void => {
         Cookies.remove('jwt_token')
         history.replace('/nxttrendz/login')
      }
      return (
         <>
            <HeaderContainer>
               <Logo src={logoUrl} alt={logoAltText} />
               <FlexRowCenterContainer>
                  <HeaderListContainer>
                     <HeaderListItem>
                        <Link to='/nxttrendz/'>{headerHomeOptionText}</Link>
                     </HeaderListItem>
                     <HeaderListItem>
                        <Link to='/nxttrendz/products/'>
                           {headerProductsOptionText}
                        </Link>
                     </HeaderListItem>
                     <HeaderListItem>
                        <Link to='/nxttrendz/cart/'>
                           Cart{renderCartItemsCount()}
                        </Link>
                     </HeaderListItem>
                  </HeaderListContainer>
                  <LogoutButton type='button' onClick={onLogout}>
                     {logoutBtnText}
                  </LogoutButton>
                  <LogoutButtonContainerMobile>
                     <MdLogout onClick={onLogout} size={25} />
                  </LogoutButtonContainerMobile>
               </FlexRowCenterContainer>
            </HeaderContainer>
            <HeaderElementsMobile>
               <Link to='/nxttrendz/'>
                  <HeaderElementsMobileImg
                     src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png'
                     alt='nav home'
                  />
               </Link>
               <Link to='/nxttrendz/products/'>
                  <HeaderElementsMobileImg src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png' />
               </Link>
               <Link to='/nxttrendz/cart/'>
                  <HeaderElementsMobileImg
                     src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png'
                     alt='nav cart'
                  />
               </Link>
            </HeaderElementsMobile>
         </>
      )
   }
)
export default withRouter(Header)
