import { observer } from 'mobx-react'
import React, { Component } from 'react'
//eslint-disable-next-line  import/named
import { History } from 'history'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import {
   FlexColumnContainer,
   LoginFormContainer,
   LoginFormMainContainer,
   LoginFormWebsiteLogo,
   LoginInput,
   LoginMainImg,
   LogoutButton
} from '../styledComponents'
import stores from '../../../Common/stores'

interface LoginFormProps {
   history: History
}

@observer
class LoginForm extends Component<LoginFormProps> {
   onSubmitSuccess = (jwtToken: string): void => {
      const { history } = this.props
      Cookies.set('jwt_token', jwtToken, { expires: 30 })
      history.replace('/nxttrendz/')
   }
   submitForm = async (
      event: React.FormEvent<HTMLInputElement>
   ): Promise<void> => {
      const { nxtTrendzStore } = stores
      event.preventDefault()

      const userDetails = {
         username: nxtTrendzStore.username,
         password: nxtTrendzStore.password
      }
      const url = 'https://apis.ccbp.in/login'
      const options = {
         method: 'POST',
         body: JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
         this.onSubmitSuccess(data.jwt_token)
      } else {
         nxtTrendzStore.onSubmitFailure(data.error_msg)
      }
   }

   renderPasswordField = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      return (
         <>
            <label htmlFor='password'>PASSWORD</label>
            <LoginInput
               type='password'
               id='password'
               className='input-element'
               value={nxtTrendzStore.password}
               onChange={nxtTrendzStore.onChangePassword}
            />
         </>
      )
   }

   renderUsernameField = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      return (
         <>
            <label htmlFor='username'>USERNAME</label>
            <LoginInput
               type='text'
               id='username'
               className='input-element'
               value={nxtTrendzStore.username}
               onChange={nxtTrendzStore.onChangeUsername}
            />
         </>
      )
   }

   render(): JSX.Element {
      const { nxtTrendzStore } = stores
      const token = Cookies.get('jwt_token')
      const { showSubmitError, errorMsg } = nxtTrendzStore
      if (token !== undefined) {
         return <Redirect to='/nxttrendz/' />
      }
      return (
         <LoginFormMainContainer>
            <LoginMainImg
               src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png'
               alt='website login'
            />
            <LoginFormContainer>
               <LoginFormWebsiteLogo
                  src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
                  className='form-image'
                  alt='website logo'
               />
               <FlexColumnContainer>
                  {this.renderUsernameField()}
               </FlexColumnContainer>
               <FlexColumnContainer>
                  {this.renderPasswordField()}
               </FlexColumnContainer>

               <LogoutButton
                  type='submit'
                  className='login-button'
                  onClick={this.submitForm}
               >
                  Login
               </LogoutButton>

               {showSubmitError && <p className='error-message'>*{errorMsg}</p>}
            </LoginFormContainer>
         </LoginFormMainContainer>
      )
   }
}

export default LoginForm
