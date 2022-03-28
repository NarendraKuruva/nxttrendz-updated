import React from 'react'
import ConfigurationContext from '../../Context'
import { RightNavbarContainer } from '../styledComponents'

const RightNavbar = (): JSX.Element => (
   <ConfigurationContext.Consumer>
      {value => {
         const { showRightNavbar } = value
         if (showRightNavbar) {
            return (
               <RightNavbarContainer>
                  <h2>Right Navbar</h2>
                  <ul>
                     <li>AD 1</li>
                     <li>AD 2</li>
                  </ul>
               </RightNavbarContainer>
            )
         }
         return null
      }}
   </ConfigurationContext.Consumer>
)
export default RightNavbar
