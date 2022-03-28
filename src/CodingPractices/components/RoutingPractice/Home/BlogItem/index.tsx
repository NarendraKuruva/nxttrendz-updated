import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
interface BlogItemProps {
   blogProps: {
      id: number
      title: string
      imageUrl: string
      avatarUrl: string
      author: string
      topic: string
   }
}

const BlogItem = ({ blogProps }: BlogItemProps): JSX.Element => {
   const { title, author, topic, id } = blogProps

   return (
      <Link to={`/blogsassignment/blogs/${id}`}>
         <div className='blog-item'>
            <div className='item-heading-container'>
               <h1 className='heading'>{title}</h1>
               <p>{author}</p>
            </div>
            <p>{topic}</p>
            <hr />
         </div>
      </Link>
   )
}

export default BlogItem
