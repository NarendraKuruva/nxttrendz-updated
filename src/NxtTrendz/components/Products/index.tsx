import React from 'react'
import Header from '../Header'
import AllProductsSection from '../AllProducts'
import PrimeDealsSection from '../PrimeDealsPage'
import stores from '../../../Common/stores'
import {
   ProductsMainContainer,
   ProductsHomeContainer,
   ProductsPageAllProductsCont,
   ProductsPageMainContainer,
   ProductsPagePrimeDealsCont
} from './styledComponents'

const Products = (): JSX.Element => (
   <ProductsMainContainer>
      <ProductsHomeContainer>
         <Header />
         <ProductsPageMainContainer>
            <ProductsPagePrimeDealsCont>
               {<PrimeDealsSection nxtTrendzStore={stores.nxtTrendzStore} />}
            </ProductsPagePrimeDealsCont>
            <ProductsPageAllProductsCont>
               {<AllProductsSection nxtTrendzStore={stores.nxtTrendzStore} />}
            </ProductsPageAllProductsCont>
         </ProductsPageMainContainer>
      </ProductsHomeContainer>
   </ProductsMainContainer>
)

export default Products
