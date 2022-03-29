import React from 'react'
import {
   notFoundImgUrl,
   notFoundImgAltText
} from '../../constants/nxttrendzAppConstants'
import { NotFoundContainer } from './styledComponents'

const NotFound = (): JSX.Element => (
   <NotFoundContainer>
      <img src={notFoundImgUrl} alt={notFoundImgAltText} />
   </NotFoundContainer>
)

export default NotFound
