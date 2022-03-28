import React, { Component } from 'react'
import { StyledContainer } from '../styledComponents'
import Header from '../Header'

import UserInfo from './UserInfo'
import BlogList from './BlogList'
import './index.css'

class Home extends Component {
   state = { blogsList: [], isLoading: true }

   componentDidMount(): void {
      this.fetchBlogItems()
   }

   fetchBlogItems = async (): Promise<void> => {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const blogItems = await response.json()

      const updatedBlogItems = blogItems.map(eachBlog => ({
         id: eachBlog.id,
         title: eachBlog.title,
         imageUrl: eachBlog.image_url,
         avatarUrl: eachBlog.avartar_url,
         author: eachBlog.author,
         topic: eachBlog.topic
      }))

      this.setState({ blogsList: updatedBlogItems, isLoading: false })
   }
   render(): JSX.Element {
      const { blogsList, isLoading } = this.state

      return (
         <StyledContainer className='home-decoration'>
            <Header />
            <UserInfo />
            {isLoading ? (
               <div>Loading</div>
            ) : (
               <BlogList listItems={blogsList} />
            )}
         </StyledContainer>
      )
   }
}

export default Home
