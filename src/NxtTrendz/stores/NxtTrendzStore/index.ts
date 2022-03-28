import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import ProductModel from '../models/ProductModel'
import CartItemModel from '../models/CartItemModel'
import ProductItemModel from '../models/ProductItemModel'
import NxtTrenzService from '../../services/NxtTrendzService'
import { sortbyOptions } from '../../constants/nxttrendzAppConstants'

class NxtTrendzStore {
   @observable productsList!: ProductModel[]
   @observable apiStatus!: number
   @observable activeOptionId!: string
   @observable activeCategory!: string
   @observable searchInput!: string
   @observable activeRatingId!: string
   @observable productItemDetails!: ProductItemModel
   @observable productItemApiStatus: number

   @observable productQuantity!: number
   @observable cartList!: CartItemModel[]
   @observable username!: string
   @observable password!: string
   @observable showSubmitError!: boolean
   @observable errorMsg!: string
   @observable primeDeals!: ProductModel[]
   @observable primeDealsApiStatus!: number
   nxtTrendzServices: NxtTrenzService

   constructor(nxtTrendzServiceApi) {
      this.productsList = []
      this.apiStatus = 0
      this.activeOptionId = sortbyOptions[0].optionId
      this.searchInput = ''
      this.activeRatingId = ''
      this.activeCategory = ''
      this.productQuantity = 1
      this.cartList = []
      this.username = ''
      this.password = ''
      this.showSubmitError = false
      this.primeDeals = []
      this.productItemDetails = {
         id: '',
         imageUrl: '',
         title: '',
         price: '',
         description: '',
         brand: '',
         totalReviews: '',
         rating: '',
         availability: '',
         similarProducts: []
      }
      this.productItemApiStatus = 0
      this.nxtTrendzServices = nxtTrendzServiceApi
   }

   @computed get cartCount(): number {
      return this.cartList.length
   }
   @action.bound
   getPrimeDeals = async (): Promise<unknown> => {
      const apiUrl = 'https://apis.ccbp.in/prime-deals'

      const response = this.nxtTrendzServices.getPrimeDeals()
      return bindPromiseWithOnSuccess(response)
         .to(
            status => {
               this.primeDealsApiStatus = status
            },
            response => {
               if (!response) return
               const updatedData = response.data.map(
                  product => new ProductModel(product)
               )

               this.primeDeals = updatedData
            }
         )
         .catch(error => {
            console.log(error)
         })
      // if (response.ok === true) {
      //    // const fetchedData = await response.json()
      //    const fetchedData = response.response
      //    const updatedPrimeDealsData = fetchedData.map(
      //       product => new ProductModel(product)
      //    )
      //    this.primeDeals = updatedPrimeDealsData
      //    this.primeDealsApiStatus = apiStatusConstants.success
      // } else if (response.status === 401) {
      //    this.primeDealsApiStatus = apiStatusConstants.failure
      // }
   }

   @action.bound onChangeUsername = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      this.username = event.target.value
   }

   @action.bound onChangePassword = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      this.password = event.target.value
   }

   @action.bound onSubmitFailure(errorMsg: string): void {
      this.showSubmitError = true
      this.errorMsg = errorMsg
   }
   @action.bound removeAllCartItemsFromCart(): void {
      this.cartList = []
   }
   @action.bound addCartItem(cartItemDetails: {
      id: string
      title: string
      brand: string
      quantity: number
      price: string
      imageUrl: string
   }): void {
      const { id, quantity } = cartItemDetails
      const itemsPresent: CartItemModel[] = []
      for (const eachItem of this.cartList) {
         if (eachItem.id === id) {
            itemsPresent.push(eachItem)
         }
      }
      if (itemsPresent.length === 0) {
         this.cartList = [new CartItemModel(cartItemDetails), ...this.cartList]
         this.productQuantity = 1
      } else {
         for (const eachItem of this.cartList) {
            if (eachItem.id === id) {
               eachItem.quantity += quantity
               this.productQuantity = 1
            }
         }
      }
   }
   @action.bound removeItem(ItemId: string): void {
      const updatedList = this.cartList.filter(
         eachCartItem => eachCartItem.id !== ItemId
      )
      this.cartList = updatedList
   }

   @action.bound fetchProductDetails = async (id: string): Promise<unknown> => {
      const response = this.nxtTrendzServices.getProductItemDetails(id)
      return bindPromiseWithOnSuccess(response)
         .to(
            status => {
               this.productItemApiStatus = status
            },
            data => {
               if (!data) return
               const updatedData = {
                  id: data.id,
                  imageUrl: data.image_url,
                  title: data.title,
                  price: data.price,
                  description: data.description,
                  brand: data.brand,
                  totalReviews: data.total_reviews,
                  rating: data.rating,
                  availability: data.availability,
                  similarProducts: data.similar_products.map(eachProduct => ({
                     id: eachProduct.id,
                     imageUrl: eachProduct.image_url,
                     title: eachProduct.title,
                     price: eachProduct.price,
                     description: eachProduct.description,
                     brand: eachProduct.brand,
                     totalReviews: eachProduct.total_reviews,
                     rating: eachProduct.rating,
                     availability: eachProduct.availability
                  }))
               }
               this.productItemDetails = updatedData
            }
         )
         .catch(error => {
            console.log(error)
         })
      // if (response.ok === true) {
      //    // const data = await response.json()
      //    const data = response.response
      //    const updatedData = {
      //       id: data.id,
      //       imageUrl: data.image_url,
      //       title: data.title,
      //       price: data.price,
      //       description: data.description,
      //       brand: data.brand,
      //       totalReviews: data.total_reviews,
      //       rating: data.rating,
      //       availability: data.availability,
      //       similarProducts: data.similar_products.map(eachProduct => ({
      //          id: eachProduct.id,
      //          imageUrl: eachProduct.image_url,
      //          title: eachProduct.title,
      //          price: eachProduct.price,
      //          description: eachProduct.description,
      //          brand: eachProduct.brand,
      //          totalReviews: eachProduct.total_reviews,
      //          rating: eachProduct.rating,
      //          availability: eachProduct.availability
      //       }))
      //    }
      //    this.productItemDetails = updatedData
      //    this.productItemApiStatus = apiStatusConstants.success
      // } else if (response.status === 401 || response.status === 404) {
      //    this.productItemApiStatus = apiStatusConstants.failure
      // }
   }

   @action.bound onIncreaseQuantity = (): void => {
      this.productQuantity++
   }
   @action.bound onDecreaseQuantity = (): void => {
      this.productQuantity--
   }

   @action.bound
   getProducts = async (): Promise<
      | {
           data: {
              id: string
              image_url: string
              title: string
              price: string
              brand: string
              rating: string
           }
        }
      | any
   > => {
      const endpointObject = {
         searchInputVal: this.searchInput,
         activeOptionIdVal: this.activeOptionId,
         activeCategoryVal: this.activeCategory,
         activeRatingIdVal: this.activeRatingId
      }
      const response = this.nxtTrendzServices.getAllProducts(endpointObject)
      return bindPromiseWithOnSuccess(response)
         .to(
            status => {
               this.apiStatus = status
            },
            response => {
               if (!response) return
               const updatedData = response.products.map(
                  product => new ProductModel(product)
               )
               this.productsList = updatedData
            }
         )
         .catch(error => {
            console.log(error)
         })

      // if (response.ok) {1
      //    // const fetchedData = await response.json()

      //    // const updatedData = fetchedData.products.map(
      //    //    product => new ProductModel(product)
      //    // )
      //    const fetchedData = response

      //    const updatedData = fetchedData.response.map(
      //       product => new ProductModel(product)
      //    )
      //    if (updatedData.length === 0) {
      //       this.apiStatus = apiStatusConstants.failure
      //    } else {
      //       this.productsList = updatedData
      //       this.apiStatus = apiStatusConstants.success
      //    }
      // } else {
      //    this.apiStatus = apiStatusConstants.failure
      // }
   }

   @action.bound changeSortby = (activeOptionId: string): void => {
      this.activeOptionId = activeOptionId
      this.getProducts()
   }
   @action.bound changeRating = (activeRatingId: string): void => {
      this.activeRatingId = activeRatingId
      this.getProducts()
   }
   @action.bound changeCategory = (activeCategoryId: string): void => {
      this.activeCategory = activeCategoryId
      this.getProducts()
   }
   @action.bound enterSearchInput = (): void => {
      this.getProducts()
   }
   @action.bound changeSearchInput = (searchInput: string): void => {
      this.searchInput = searchInput
   }
   @action.bound clearFilters = (): void => {
      this.searchInput = ''
      this.activeCategory = ''
      this.activeRatingId = ''
      this.getProducts()
   }
   @action.bound onContinueShopping = (): void => {
      this.clearFilters()
   }
}
export default NxtTrendzStore
