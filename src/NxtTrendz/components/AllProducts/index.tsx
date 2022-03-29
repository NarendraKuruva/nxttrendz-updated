import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'
import FiltersGroup from '../FiltersGroup'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import { categoryOptions } from '../../constants/nxttrendzAppConstants'
import { sortbyOptions } from '../../constants/nxttrendzAppConstants'
import { ratingsList } from '../../constants/nxttrendzAppConstants'
import {
   AllProductsLoaderContainer,
   AllProductsLoaderMainContainer,
   AllProductsMainContainer,
   AllProductsNoProductsFoundContainer,
   CenterContainer,
   ProductDetailedImg,
   ProductsAndFilterContainer,
   ProductsContainer,
   ProductsList,
   StyledButton,
   StyledMainHeading
} from './styledComponents'

const productNotFoundHeading = 'Products Not Found'
const continueShoppingBtnText = 'Continue Shopping'
const productDetailedErrImgLink =
   'https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png'
const productDetailedErrImgAltText = 'error view'

interface AllProductsProps {
   nxtTrendzStore: NxtTrendzStore
}

@observer
class AllProductsSection extends Component<AllProductsProps> {
   componentDidMount(): void {
      const { nxtTrendzStore } = this.props
      nxtTrendzStore.getProducts()
   }

   renderProductsList = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      return (
         <ProductsContainer>
            <ProductsHeader
               sortbyOptions={sortbyOptions}
               activeOptionId={nxtTrendzStore.activeOptionId}
            />
            {}
            <ProductsList>
               {nxtTrendzStore.productsList.map(product => (
                  <ProductCard productDetails={product} key={product.id} />
               ))}
            </ProductsList>
         </ProductsContainer>
      )
   }
   renderLoader = (): JSX.Element => (
      <AllProductsLoaderMainContainer>
         <AllProductsLoaderContainer>
            <Loader type='ThreeDots' color='#0b69ff' height={50} width={50} />
         </AllProductsLoaderContainer>
      </AllProductsLoaderMainContainer>
   )
   renderFiltersGroup = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      const {
         searchInput,
         activeCategory,
         activeRatingId,
         changeSearchInput,
         enterSearchInput,
         changeCategory,
         changeRating,
         clearFilters
      } = nxtTrendzStore
      return (
         <FiltersGroup
            searchInput={searchInput}
            categoryOptions={categoryOptions}
            ratingsList={ratingsList}
            activeCategoryId={activeCategory}
            activeRatingId={activeRatingId}
            changeSearchInput={changeSearchInput}
            enterSearchInput={enterSearchInput}
            changeCategory={changeCategory}
            changeRating={changeRating}
            clearFilters={clearFilters}
         />
      )
   }

   renderFailureView = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      return (
         <AllProductsNoProductsFoundContainer>
            <CenterContainer>
               <ProductDetailedImg
                  src={productDetailedErrImgLink}
                  alt={productDetailedErrImgAltText}
               />
               <StyledMainHeading>{productNotFoundHeading}</StyledMainHeading>
               <StyledButton onClick={nxtTrendzStore.onContinueShopping}>
                  {continueShoppingBtnText}
               </StyledButton>
            </CenterContainer>
         </AllProductsNoProductsFoundContainer>
      )
   }

   renderProductsPage = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      switch (nxtTrendzStore.apiStatus) {
         case 200:
            return this.renderProductsList()
         case 400:
            return this.renderFailureView()
         default:
            return this.renderLoader()
      }
   }

   render(): JSX.Element {
      return (
         <AllProductsMainContainer>
            <ProductsAndFilterContainer>
               {this.renderFiltersGroup()}
               {this.renderProductsPage()}
            </ProductsAndFilterContainer>
         </AllProductsMainContainer>
      )
   }
}
export default AllProductsSection
