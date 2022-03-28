import React, { Component } from 'react'
//eslint-disable-next-line  import/named
import { History } from 'history'
import { inject, observer } from 'mobx-react'
import Loader from 'react-loader-spinner'
//eslint-disable-next-line  import/named
import { match } from 'react-router-dom'
//eslint-disable-next-line  import/named
import {
   CenterContainer,
   FlexRowContainer,
   HeadingTwo,
   ProductDetailedImg,
   FlexCenterContainer,
   ProductDetailedViewMainContainer,
   RatingAndCostContainer,
   RatingContainer,
   StyledMainHeading,
   StyledParagraph,
   StyledProductItemDetails,
   StyledSpanElement,
   StyledStarIcon,
   CounterContainer,
   IncreaseDecreaseBtn,
   LogoutButton,
   StyledStarIconContainer,
   AddToCartBtnContainer,
   StyledButton
} from '../styledComponents'
import Header from '../Header'
import ProductCard from '../ProductCard'
import stores from '../../../Common/stores'

interface ProductItemProps {
   match: match<Params>
   history: History
}

interface Params {
   id: string
}

const apiStatusConstants = {
   initial: 'INITIAL',
   success: 'SUCCESS',
   failure: 'FAILURE',
   inProgress: 'IN_PROGRESS'
}

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
      const { nxtTrendzStore } = stores
      const id = this.getProductId()
      nxtTrendzStore.fetchProductDetails(id)
   }

   renderSuccessView = (): JSX.Element => {
      const { nxtTrendzStore } = stores
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
      return (
         <FlexCenterContainer>
            <ProductDetailedViewMainContainer>
               <Header />
               <FlexRowContainer>
                  <ProductDetailedImg src={imageUrl} />
                  <StyledProductItemDetails>
                     <StyledMainHeading>{title}</StyledMainHeading>
                     <HeadingTwo>Rs {price}/-</HeadingTwo>
                     <RatingAndCostContainer>
                        <RatingContainer>
                           <p>{rating}</p>
                           <StyledStarIconContainer>
                              <StyledStarIcon
                                 src='https://assets.ccbp.in/frontend/react-js/star-img.png'
                                 alt='star'
                              />
                           </StyledStarIconContainer>
                        </RatingContainer>
                        <StyledParagraph ml={15}>
                           {totalReviews} Reviews
                        </StyledParagraph>
                     </RatingAndCostContainer>

                     <StyledParagraph color='#7e898d' size={20}>
                        {description}
                     </StyledParagraph>
                     <StyledParagraph color='#7e898d'>
                        <StyledSpanElement>Available: </StyledSpanElement>
                        {availability}
                     </StyledParagraph>
                     <StyledParagraph color='#7e898d'>
                        <StyledSpanElement>Brand: </StyledSpanElement>
                        {brand}
                     </StyledParagraph>
                     <hr />
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
                        <LogoutButton onClick={addItemToCart}>
                           ADD TO CART
                        </LogoutButton>
                     </AddToCartBtnContainer>
                  </StyledProductItemDetails>
               </FlexRowContainer>
               <StyledMainHeading>Similar Products</StyledMainHeading>
               <FlexRowContainer>
                  {similarProducts.map(eachProduct => (
                     <ProductCard
                        productDetails={eachProduct}
                        key={eachProduct.id}
                     />
                  ))}
               </FlexRowContainer>
            </ProductDetailedViewMainContainer>
         </FlexCenterContainer>
      )
   }

   onContinueShopping = (): void => {
      const { history } = this.props
      history.push('/nxttrendz/products')
   }

   renderFailureView = (): JSX.Element => (
      <FlexCenterContainer>
         <ProductDetailedViewMainContainer>
            <Header />
            <CenterContainer>
               <ProductDetailedImg
                  src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png'
                  alt='error view'
               />
               <StyledMainHeading>Product Not Found</StyledMainHeading>
               <StyledButton onClick={this.onContinueShopping}>
                  Continue Shopping
               </StyledButton>
            </CenterContainer>
         </ProductDetailedViewMainContainer>
      </FlexCenterContainer>
   )
   renderLoadingView = (): JSX.Element => (
      <CenterContainer className='products-loader-container'>
         <Loader type='ThreeDots' color='#0b69ff' height={50} width={50} />
      </CenterContainer>
   )
   render(): JSX.Element {
      const { nxtTrendzStore } = stores
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
