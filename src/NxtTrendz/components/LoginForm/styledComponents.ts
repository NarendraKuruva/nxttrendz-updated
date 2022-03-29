import styled from 'styled-components'

export const FlexColumnContainer = styled.div`
   display: flex;
   flex-direction: column;
`
export const LoginInput = styled.input`
   border: 1px solid grey;
   background-color: azure;
   padding: 20px;
   height: 50px;
   border-radius: 8px;
   margin-bottom: 5px;
`
export const LoginPageContainer = styled.div`
   height: 100vh;
`
export const LoginFormMainContainer = styled.div`
   display: flex;
   padding: 50px;
   margin: 100px;
   justify-content: center;
   align-items: center;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`
export const LoginMainImg = styled.img`
   width: 75%;
   margin-right: 15px;
   @media (max-width: 768px) {
      width: 300px;
      max-width: none;
   }
`
export const LoginFormContainer = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   box-shadow: 0px 4px 16px 0px #bfbfbf;
   padding: 60px;
   @media (max-width: 768px) {
      box-shadow: none;
   }
`
export const LoginFormWebsiteLogo = styled.img`
   width: 50%;
`
export const LogInButton = styled.button`
   color: white;
   background-color: #0b69ff;
   border: 0px;
   padding: 5px;
   border-radius: 5px;
`
