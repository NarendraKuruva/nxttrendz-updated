import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { inject, observer } from 'mobx-react'
import ProductCard from '../ProductCard'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import {
   PrimeDealsLoaderContainer,
   PrimeDealsFailureImg,
   PrimeDealsList,
   PrimeDealsMainContainer,
   StyledMainHeading
} from './styledComponents'

interface PrimeDealsPropsTypes {
   nxtTrendzStore: NxtTrendzStore
}

const primeDealsListHeadingText = 'Exclusive Prime Deals'
const primeDealsFailureImgUrl =
   'https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png'
const primeDealsFailureImgAltText = 'Register Prime'

@observer
class PrimeDealsSection extends Component<PrimeDealsPropsTypes> {
   componentDidMount(): void {
      const { nxtTrendzStore } = this.props
      nxtTrendzStore.getPrimeDeals()
   }

   renderPrimeDealsList = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      const { primeDeals } = nxtTrendzStore
      return (
         <PrimeDealsMainContainer>
            <StyledMainHeading>{primeDealsListHeadingText}</StyledMainHeading>
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
            src={primeDealsFailureImgUrl}
            alt={primeDealsFailureImgAltText}
         />
      </PrimeDealsMainContainer>
   )

   renderLoadingView = (): JSX.Element => (
      <PrimeDealsMainContainer>
         <PrimeDealsLoaderContainer>
            <Loader type='ThreeDots' color='#0b69ff' height={50} width={50} />
         </PrimeDealsLoaderContainer>
      </PrimeDealsMainContainer>
   )

   render(): JSX.Element {
      const { nxtTrendzStore } = this.props
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
