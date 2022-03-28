import React, { Component } from 'react'
import ConfigurationContext from '../../Context'
import Content from '../Content'
import Footer from '../Footer'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import RightNavbar from '../RightNavbar'
import {
   ContentContainerMain,
   FlexCenterContainer,
   FlexColumnContainer,
   FlexRowContainer,
   MainHeaderContainer
} from '../styledComponents'
class LayoutHome extends Component {
   state = { showContent: true, showLeftNavbar: true, showRightNavbar: true }

   onToggleContent = (): void => {
      const { showContent } = this.state
      this.setState({ showContent: !showContent })
   }
   onToggleLeftNavbar = (): void => {
      const { showLeftNavbar } = this.state
      this.setState({ showLeftNavbar: !showLeftNavbar })
   }
   onToggleRightNavbar = (): void => {
      const { showRightNavbar } = this.state
      this.setState({ showRightNavbar: !showRightNavbar })
   }

   render(): JSX.Element {
      const { showContent, showLeftNavbar, showRightNavbar } = this.state
      return (
         <ConfigurationContext.Provider
            value={{
               showContent: showContent,
               showLeftNavbar: showLeftNavbar,
               showRightNavbar: showRightNavbar,
               onToggleShowContent: this.onToggleContent,
               onToggleShowLeftNavbar: this.onToggleLeftNavbar,
               onToggleShowRightNavbar: this.onToggleRightNavbar
            }}
         >
            <div>
               <div>
                  <MainHeaderContainer>
                     <h1>Layout</h1>
                     <FlexColumnContainer>
                        <FlexCenterContainer>
                           <input
                              type='checkbox'
                              id='content'
                              onClick={this.onToggleContent}
                              checked={showContent}
                           />
                           <label htmlFor='content'>Content</label>
                        </FlexCenterContainer>
                        <FlexCenterContainer>
                           <input
                              type='checkbox'
                              id='leftNavbar'
                              onClick={this.onToggleLeftNavbar}
                              checked={showLeftNavbar}
                           />
                           <label htmlFor='leftNavbar'>Show Left Navbar</label>
                        </FlexCenterContainer>
                        <FlexCenterContainer>
                           <input
                              type='checkbox'
                              id='rightNavbar'
                              onClick={this.onToggleRightNavbar}
                              checked={showRightNavbar}
                           />
                           <label htmlFor='rightNavbar'>Right</label>
                        </FlexCenterContainer>
                     </FlexColumnContainer>
                  </MainHeaderContainer>
               </div>
               <ContentContainerMain>
                  <Header />
                  <FlexRowContainer>
                     <LeftNavbar />
                     <Content />
                     <RightNavbar />
                  </FlexRowContainer>
                  <Footer />
               </ContentContainerMain>
            </div>
         </ConfigurationContext.Provider>
      )
   }
}

export default LayoutHome
