import React from 'react'
import BlogItem from '../BlogItem'

interface BlogListProps {
   listItems: {
      id: number
      title: string
      imageUrl: string
      avatarUrl: string
      author: string
      topic: string
   }[]
}

const BlogList = ({ listItems }: BlogListProps): JSX.Element => (
   <div>
      {listItems.map(eachItem => (
         <BlogItem blogProps={eachItem} key={eachItem.id} />
      ))}
   </div>
)

export default BlogList
