import React, { Component } from 'react'
import {
   StyledRegistrationForm,
   StyledInput,
   StyledSubmitButton,
   StyledHeading,
   CenterContainer,
   ColumnAlignContainer,
   SuccessImg
} from '../Form/styledComponents'

class RegistrationForm extends Component {
   state = {
      firstName: '',
      lastName: '',
      showLastNameErr: false,
      showFirstNameErr: false,
      isSubmitted: false
   }

   onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ firstName: event.target.value })
   }
   validateFirstName = (): boolean => {
      const { firstName } = this.state
      return firstName !== ''
   }
   onBlurFirstName = (): void => {
      const isValidFirstName = this.validateFirstName()
      this.setState({ showFirstNameErr: !isValidFirstName })
   }

   renderFirstName = (): JSX.Element => {
      const { firstName, showFirstNameErr } = this.state
      return (
         <ColumnAlignContainer>
            <label htmlFor='firstName'>FIRST NAME</label>
            <StyledInput
               id='firstName'
               type='text'
               onChange={this.onFirstNameChange}
               onBlur={this.onBlurFirstName}
               value={firstName}
               placeholder='First Name'
               isEmpty={showFirstNameErr}
            />
         </ColumnAlignContainer>
      )
   }
   onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ lastName: event.target.value })
   }

   validateLastName = (): boolean => {
      const { lastName } = this.state
      return lastName !== ''
   }

   onBlurLastName = (): void => {
      const isValidLastName = this.validateLastName()
      this.setState({ showLastNameErr: !isValidLastName })
   }

   renderLastName = (): JSX.Element => {
      const { lastName, showLastNameErr } = this.state
      return (
         <ColumnAlignContainer>
            <label htmlFor='lastName'>LAST NAME</label>
            <StyledInput
               id='lastName'
               type='text'
               onChange={this.onLastNameChange}
               onBlur={this.onBlurLastName}
               value={lastName}
               placeholder='Last Name'
               isEmpty={showLastNameErr}
            />
         </ColumnAlignContainer>
      )
   }

   onSubmitForm = (event: React.FormEvent<HTMLInputElement>): void => {
      event.preventDefault()

      const isValidFirstname = this.validateFirstName()
      const isValidLastName = this.validateLastName()

      if (isValidFirstname && isValidLastName) {
         this.setState({ isSubmitted: true })
      } else {
         this.setState({
            showLastNameErr: !isValidLastName,
            showFirstNameErr: !isValidFirstname,
            isSubmitted: false
         })
      }
   }

   onSubmitAnotherResponse = (): void => {
      const { isSubmitted } = this.state
      this.setState({
         isSubmitted: !isSubmitted,
         firstName: '',
         lastName: ''
      })
   }

   renderSuccessfulSubmission = (): JSX.Element => (
      <CenterContainer>
         <SuccessImg
            src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
            alt='success'
         />
         <p>Submitted Successfully</p>
         <StyledSubmitButton onClick={this.onSubmitAnotherResponse}>
            Submit Another Response
         </StyledSubmitButton>
      </CenterContainer>
   )

   renderHome = (): JSX.Element => (
      <div>
         {this.renderFirstName()}
         {this.renderLastName()}
         <StyledSubmitButton type='submit'>Submit</StyledSubmitButton>
      </div>
   )

   render(): JSX.Element {
      const { isSubmitted } = this.state
      return (
         <CenterContainer>
            <CenterContainer>
               <StyledHeading>Registration</StyledHeading>
               <StyledRegistrationForm onSubmit={this.onSubmitForm}>
                  {isSubmitted
                     ? this.renderSuccessfulSubmission()
                     : this.renderHome()}
               </StyledRegistrationForm>
            </CenterContainer>
         </CenterContainer>
      )
   }
}

export default RegistrationForm
