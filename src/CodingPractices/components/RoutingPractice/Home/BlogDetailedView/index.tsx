import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { match } from 'react-router-dom' // eslint-disable-line
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import Header from '../../Header'

interface MatchParams {
   id: string
}
interface Props {
   match: match<MatchParams>
}

interface StateProps {
   blogDetails: {
      [key: string]: string
   }
   isLoading: boolean
}

class BlogDetailedView extends Component<Props, StateProps> {
   state: StateProps = { blogDetails: {}, isLoading: true }

   componentDidMount(): void {
      this.fetchBlogDetails()
   }

   fetchBlogDetails = async (): Promise<void> => {
      const { match } = this.props
      const { params } = match
      const { id } = params

      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedBlogDetails = {
         id: data.id,
         author: data.author,
         avatarUrl: data.avatar_url,
         content: data.content,
         imageUrl: data.image_url,
         title: data.title,
         topic: data.topic
      }
      this.setState({ blogDetails: updatedBlogDetails, isLoading: false })
   }

   renderCard = (): JSX.Element => {
      const { blogDetails } = this.state
      const { author, avatarUrl, content, imageUrl, title } = blogDetails
      return (
         <div className='container'>
            <div className='main-container'>
               <Header />
               <div className='blog-container'>
                  <h1 className='heading'>{title}</h1>
                  <div className='author-container'>
                     <img src={avatarUrl} className='avatar' />
                     <p>{author}</p>
                  </div>
                  <img src={imageUrl} />
                  <p>{content}</p>
               </div>
            </div>
         </div>
      )
   }

   render(): JSX.Element {
      const { isLoading } = this.state
      return (
         <div className='container'>
            {isLoading ? (
               <Loader type='TailSpin' color='#00BFFF' height={50} width={50} />
            ) : (
               this.renderCard()
            )}
         </div>
      )
   }
}
export default BlogDetailedView
