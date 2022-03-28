import React from 'react'
import { BsFilterRight } from 'react-icons/bs'
import stores from '../../../Common/stores'
import {
   FlexRowContainerwithoutMobile,
   ProductsHeaderContainer,
   StyledMainHeading
} from '../styledComponents'

interface SortbyOptionsTypes {
   optionId: string
   displayText: string
}

interface ProductsHeaderProps {
   sortbyOptions: SortbyOptionsTypes[]
   activeOptionId: string
}

const ProductsHeader = (props: ProductsHeaderProps): JSX.Element => {
   const onChangeSortby = event => {
      const { nxtTrendzStore } = stores
      nxtTrendzStore.changeSortby(event.target.value)
   }

   const { sortbyOptions } = props
   const { nxtTrendzStore } = stores
   const { activeOptionId } = nxtTrendzStore
   return (
      <ProductsHeaderContainer>
         <StyledMainHeading>All Products</StyledMainHeading>
         <FlexRowContainerwithoutMobile>
            <BsFilterRight />
            <p>Sort by</p>
            <select value={activeOptionId} onChange={onChangeSortby}>
               {sortbyOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                     {eachOption.displayText}
                  </option>
               ))}
            </select>
         </FlexRowContainerwithoutMobile>
      </ProductsHeaderContainer>
   )
}

export default ProductsHeader
