import React from 'react'
import Header from '../Header'
import {
   FlexCenterContainer,
   HomeContainer,
   ProductsPageAllProductsCont,
   ProductsPageMainContainer,
   ProductsPagePrimeDealsCont
} from '../styledComponents'
import AllProductsSection from '../AllProducts'
import PrimeDealsSection from '../PrimeDealsPage'

const Products = (): JSX.Element => (
   <FlexCenterContainer>
      <HomeContainer>
         <Header />
         <ProductsPageMainContainer>
            <ProductsPagePrimeDealsCont>
               {<PrimeDealsSection />}
            </ProductsPagePrimeDealsCont>
            <ProductsPageAllProductsCont>
               {<AllProductsSection />}
            </ProductsPageAllProductsCont>
         </ProductsPageMainContainer>
      </HomeContainer>
   </FlexCenterContainer>
)

export default Products
