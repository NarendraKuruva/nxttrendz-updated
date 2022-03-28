import React from 'react'
import Cookies from 'js-cookie'
//eslint-disable-next-line  import/named
import { History } from 'history'
import { Link, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import {
   CartItemsCountBadge,
   FlexRowCenterContainer,
   HeaderContainer,
   HeaderListContainer,
   HeaderListItem,
   Logo,
   LogoutButton
} from '../styledComponents'
import stores from '../../../Common/stores'

interface Props {
   history: History
}

const Header = inject('nxtTrendzStore')(
   observer(
      (props: Props): JSX.Element => {
         const { history } = props

         const renderCartItemsCount = () => {
            const { nxtTrendzStore } = stores

            const { cartList } = nxtTrendzStore
            const cartItemsCount = cartList.length
            const countCart = nxtTrendzStore.cartCount
            return (
               <>
                  {cartItemsCount > 0 ? (
                     <CartItemsCountBadge className='cart-count-badge'>
                        {countCart}
                     </CartItemsCountBadge>
                  ) : null}
               </>
            )
         }

         const onLogout = (): void => {
            Cookies.remove('jwt_token')
            history.replace('/nxttrendz/login')
         }
         return (
            <HeaderContainer>
               <Logo
                  src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
                  alt='logo'
               />
               <FlexRowCenterContainer>
                  <HeaderListContainer>
                     <HeaderListItem>
                        <Link to='/nxttrendz/'>Home</Link>
                     </HeaderListItem>
                     <HeaderListItem>
                        <Link to='/nxttrendz/products/'>Products</Link>
                     </HeaderListItem>
                     <HeaderListItem>
                        <Link to='/nxttrendz/cart/'>
                           Cart{renderCartItemsCount()}
                        </Link>
                     </HeaderListItem>
                  </HeaderListContainer>
                  <LogoutButton type='button' onClick={onLogout}>
                     Logout
                  </LogoutButton>
               </FlexRowCenterContainer>
            </HeaderContainer>
         )
      }
   )
)
export default withRouter(Header)
