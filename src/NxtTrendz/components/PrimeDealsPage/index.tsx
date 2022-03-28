import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { observer } from 'mobx-react'
import stores from '../../../Common/stores'
import ProductCard from '../ProductCard'
import {
   AllProductsLoaderContainer,
   PrimeDealsFailureImg,
   PrimeDealsList,
   PrimeDealsMainContainer,
   StyledMainHeading
} from '../styledComponents'

const apiStatusConstants = {
   initial: 'INITIAL',
   success: 'SUCCESS',
   failure: 'FAILURE',
   inProgress: 'IN_PROGRESS'
}

@observer
class PrimeDealsSection extends Component {
   componentDidMount(): void {
      const { nxtTrendzStore } = stores
      nxtTrendzStore.getPrimeDeals()
   }

   renderPrimeDealsList = (): JSX.Element => {
      const { nxtTrendzStore } = stores
      const { primeDeals } = nxtTrendzStore
      return (
         <PrimeDealsMainContainer>
            <StyledMainHeading className='primedeals-list-heading'>
               Exclusive Prime Deals
            </StyledMainHeading>
            <PrimeDealsList>
               {primeDeals.map(product => (
                  <ProductCard productDetails={product} key={product.id} />
               ))}
            </PrimeDealsList>
         </PrimeDealsMainContainer>
      )
   }

   renderPrimeDealsFailureView = (): JSX.Element => (
      <PrimeDealsMainContainer>
         <PrimeDealsFailureImg
            src='https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png'
            alt='Register Prime'
         />
      </PrimeDealsMainContainer>
   )

   renderLoadingView = (): JSX.Element => (
      <PrimeDealsMainContainer>
         <AllProductsLoaderContainer className='products-loader-container'>
            <Loader type='ThreeDots' color='#0b69ff' height={50} width={50} />
         </AllProductsLoaderContainer>
      </PrimeDealsMainContainer>
   )

   render(): JSX.Element {
      const { nxtTrendzStore } = stores
      const { primeDealsApiStatus } = nxtTrendzStore
      switch (primeDealsApiStatus) {
         case 200:
            return this.renderPrimeDealsList()
         case 400:
            return this.renderPrimeDealsFailureView()
         default:
            return this.renderLoadingView()
      }
   }
}

export default PrimeDealsSection
