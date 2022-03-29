import React, { Component } from 'react'
//eslint-disable-next-line  import/named
import { History } from 'history'
import { inject, observer } from 'mobx-react'
import Loader from 'react-loader-spinner'
//eslint-disable-next-line  import/named
import { match } from 'react-router-dom'
//eslint-disable-next-line  import/named
import Header from '../Header'
import ProductCard from '../ProductCard'
import NxtTrendzStore from '../../stores/NxtTrendzStore'
import {
   AddToCartBtnContainer,
   AddToCartButton,
   CenterContainer,
   ContinueShoppingButton,
   CounterContainer,
   HeadingTwo,
   HorizontalLine,
   IncreaseDecreaseBtn,
   ProductAvailability,
   ProductBrand,
   ProductDescription,
   ProductDetailedImg,
   ProductDetailedViewMainContainer,
   ProductItemCenterContainer,
   ProductItemContentContainer,
   ProductItemLoaderContainer,
   ProductRating,
   RatingAndCostContainer,
   RatingContainer,
   SimilarProductsMainContainer,
   StyledMainHeading,
   StyledParagraph,
   StyledProductItemDetails,
   StyledSpanElement,
   StyledStarIcon,
   StyledStarIconContainer,
   TotalReviews
} from './styledComponents'

interface ProductItemProps {
   match: match<Params>
   history: History
   nxtTrendzStore: NxtTrendzStore
}

interface Params {
   id: string
}

const productNotFoundText = 'Product Not Found'
const continueShoppingText = 'Continue Shopping'
const productNotFoundImgUrl =
   'https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png'
const productNotFoundImgAltText = 'error view'
const addToCartBtnText = 'ADD TO CART'
const similarProductsHeadingText = 'Similar Products'
const ratingStarImgUrl = 'https://assets.ccbp.in/frontend/react-js/star-img.png'
const ratingStarImgAltText = 'star'

@inject('nxtTrendzStore')
@observer
class ProductItemDetails extends Component<ProductItemProps> {
   getProductId = (): string => {
      const { match } = this.props
      const { params } = match
      const { id } = params
      return id
   }
   componentDidMount(): void {
      const { nxtTrendzStore } = this.props
      const id = this.getProductId()
      nxtTrendzStore.fetchProductDetails(id)
   }

   renderSuccessView = (): JSX.Element => {
      const { nxtTrendzStore } = this.props
      const { productItemDetails, productQuantity } = nxtTrendzStore
      const {
         imageUrl,
         title,
         price,
         description,
         brand,
         totalReviews,
         rating,
         availability,
         similarProducts
      } = productItemDetails
      const { addCartItem } = nxtTrendzStore
      const addItemToCart = () => {
         addCartItem({ ...productItemDetails, quantity: productQuantity })
      }

      const priceText = `Rs ${price}/-`
      const totalReviewsText = `${totalReviews} Reviews`

      return (
         <ProductItemCenterContainer>
            <ProductDetailedViewMainContainer>
               <Header />
               <ProductItemContentContainer>
                  <ProductDetailedImg src={imageUrl} />
                  <StyledProductItemDetails>
                     <StyledMainHeading>{title}</StyledMainHeading>
                     <HeadingTwo>{priceText}</HeadingTwo>
                     <RatingAndCostContainer>
                        <RatingContainer>
                           <ProductRating>{rating}</ProductRating>
                           <StyledStarIconContainer>
                              <StyledStarIcon
                                 src={ratingStarImgUrl}
                                 alt={ratingStarImgAltText}
                              />
                           </StyledStarIconContainer>
                        </RatingContainer>
                        <TotalReviews>{totalReviewsText}</TotalReviews>
                     </RatingAndCostContainer>

                     <ProductDescription>{description}</ProductDescription>
                     <ProductAvailability color='#7e898d'>
                        <StyledSpanElement>Available: </StyledSpanElement>
                        {availability}
                     </ProductAvailability>
                     <ProductBrand>
                        <StyledSpanElement>Brand: </StyledSpanElement>
                        {brand}
                     </ProductBrand>
                     <HorizontalLine />
                     <CounterContainer>
                        <IncreaseDecreaseBtn
                           onClick={nxtTrendzStore.onDecreaseQuantity}
                        >
                           -
                        </IncreaseDecreaseBtn>
                        <HeadingTwo>{productQuantity}</HeadingTwo>
                        <IncreaseDecreaseBtn
                           onClick={nxtTrendzStore.onIncreaseQuantity}
                        >
                           +
                        </IncreaseDecreaseBtn>
                     </CounterContainer>
                     <AddToCartBtnContainer>
                        <AddToCartButton onClick={addItemToCart}>
                           {addToCartBtnText}
                        </AddToCartButton>
                     </AddToCartBtnContainer>
                  </StyledProductItemDetails>
               </ProductItemContentContainer>
               <StyledMainHeading>
                  {similarProductsHeadingText}
               </StyledMainHeading>
               <SimilarProductsMainContainer>
                  {similarProducts.map(eachProduct => (
                     <ProductCard
                        productDetails={eachProduct}
                        key={eachProduct.id}
                     />
                  ))}
               </SimilarProductsMainContainer>
            </ProductDetailedViewMainContainer>
         </ProductItemCenterContainer>
      )
   }

   onContinueShopping = (): void => {
      const { history } = this.props
      history.push('/nxttrendz/products')
   }

   renderFailureView = (): JSX.Element => (
      <ProductItemCenterContainer>
         <ProductDetailedViewMainContainer>
            <Header />
            <CenterContainer>
               <ProductDetailedImg
                  src={productNotFoundImgUrl}
                  alt={productNotFoundImgAltText}
               />
               <StyledMainHeading>{productNotFoundText}</StyledMainHeading>
               <ContinueShoppingButton onClick={this.onContinueShopping}>
                  {continueShoppingText}
               </ContinueShoppingButton>
            </CenterContainer>
         </ProductDetailedViewMainContainer>
      </ProductItemCenterContainer>
   )
   renderLoadingView = (): JSX.Element => (
      <ProductItemLoaderContainer>
         <Loader type='ThreeDots' color='#0b69ff' height={50} width={50} />
      </ProductItemLoaderContainer>
   )
   render(): JSX.Element {
      const { nxtTrendzStore } = this.props
      const { productItemApiStatus } = nxtTrendzStore

      switch (productItemApiStatus) {
         case 400:
            return this.renderFailureView()
         case 200:
            return this.renderSuccessView()
         default:
            return this.renderLoadingView()
      }
   }
}

export default ProductItemDetails
