import React from 'react'
import ConfigurationContext from '../../Context'
import { LeftNavbarContainer } from '../styledComponents'
const LeftNavbar = (): JSX.Element => (
   <ConfigurationContext.Consumer>
      {value => {
         const { showLeftNavbar } = value
         if (showLeftNavbar) {
            return (
               <LeftNavbarContainer>
                  <h2>Left Navbar</h2>
                  <ul>
                     <li>Item 1</li>
                     <li>Item 2</li>
                     <li>Item 3</li>
                     <li>Item 4</li>
                  </ul>
               </LeftNavbarContainer>
            )
         }
         return null
      }}
   </ConfigurationContext.Consumer>
)
export default LeftNavbar
