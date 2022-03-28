import React from 'react'
import ConfigurationContext from '../../Context'
import { ContentContainer } from '../styledComponents'

const Content = (): JSX.Element => (
   <ConfigurationContext.Consumer>
      {value => {
         const { showContent } = value
         if (showContent) {
            return (
               <ContentContainer>
                  <h2>Content</h2>
                  <p>
                     In most contexts, the concept of good denotes the conduct
                     that should be preferred when posed with a choice between
                     possible actions. Good is generally considered to be the
                     opposite of evil and is of interest in the study of ethics,
                     morality, philosophy, and religion.
                  </p>
               </ContentContainer>
            )
         }
         return null
      }}
   </ConfigurationContext.Consumer>
)
export default Content
