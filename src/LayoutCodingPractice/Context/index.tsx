import React from 'react'

const ConfigurationContext = React.createContext({
   showContent: true,
   showLeftNavbar: true,
   showRightNavbar: true,
   onToggleShowContent: () => {
      console.log()
   },
   onToggleShowLeftNavbar: () => {
      console.log()
   },
   onToggleShowRightNavbar: () => {
      console.log()
   }
})

export default ConfigurationContext
