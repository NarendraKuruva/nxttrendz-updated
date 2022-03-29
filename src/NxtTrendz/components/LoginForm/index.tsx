import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
//eslint-disable-next-line  import/named
import { History } from 'history'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import stores from '../../../Common/stores'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import {
   websiteLogoUrl,
   websiteLogoAltText
} from '../../constants/nxttrendzAppConstants'
import {
   FlexColumnContainer,
   LogInButton,
   LoginFormContainer,
   LoginFormMainContainer,
   LoginFormWebsiteLogo,
   LoginInput,
   LoginMainImg,
   LoginPageContainer
} from './styledComponents'

interface LoginFormProps {
   history: History
   nxtTrendzStore: NxtTrendzStore
}

const usernameLabelText = 'USERNAME'
const passwordLabelText = 'PASSWORD'
const loginBtnText = 'Login'

@inject('nxtTrendzStore')
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
      const { nxtTrendzStore } = this.props
      const { username, password } = nxtTrendzStore
      const userDetails = {
         username: username,
         password: password
      }
      const url = 'https://apis.ccbp.in/login'
      const options = {
         method: 'POST',
         body: JSON.stringify(userDetails)
      }
      event.preventDefault()
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
         this.onSubmitSuccess(data.jwt_token)
      } else {
         nxtTrendzStore.onSubmitFailure(data.error_msg)
      }
   }

   renderPasswordField = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      const { onChangePassword } = nxtTrendzStore
      return (
         <>
            <label htmlFor='password'>{passwordLabelText}</label>
            <LoginInput
               type='password'
               id='password'
               className='input-element'
               value={nxtTrendzStore.password}
               onChange={onChangePassword}
            />
         </>
      )
   }

   renderUsernameField = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      const { onChangeUsername } = nxtTrendzStore
      return (
         <>
            <label htmlFor='username'>{usernameLabelText}</label>
            <LoginInput
               type='text'
               id='username'
               className='input-element'
               value={nxtTrendzStore.username}
               onChange={onChangeUsername}
            />
         </>
      )
   }

   render(): JSX.Element {
      const { nxtTrendzStore } = this.props
      const token = Cookies.get('jwt_token')
      console.log('N')
      console.log(nxtTrendzStore)

      const { showSubmitError, errorMsg } = nxtTrendzStore
      console.log(showSubmitError)
      if (token !== undefined) {
         return <Redirect to='/nxttrendz/' />
      }
      return (
         <LoginPageContainer>
            <LoginFormMainContainer>
               <LoginMainImg src={websiteLogoUrl} alt={websiteLogoAltText} />
               <LoginFormContainer>
                  <LoginFormWebsiteLogo
                     src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
                     alt='website logo'
                  />
                  <FlexColumnContainer>
                     {this.renderUsernameField()}
                  </FlexColumnContainer>
                  <FlexColumnContainer>
                     {this.renderPasswordField()}
                  </FlexColumnContainer>

                  <LogInButton
                     type='submit'
                     className='login-button'
                     onClick={this.submitForm}
                  >
                     {loginBtnText}
                  </LogInButton>

                  {showSubmitError && (
                     <p className='error-message'>*{errorMsg}</p>
                  )}
               </LoginFormContainer>
            </LoginFormMainContainer>
         </LoginPageContainer>
      )
   }
}

export default LoginForm
