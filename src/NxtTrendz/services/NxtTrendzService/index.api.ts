import { ApisauceInstance, create } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import NxtTrenzService from '.'
interface endpointObjTypes {
   activeOptionIdVal: string
   activeCategoryVal: string
   activeRatingIdVal: string
   searchInputVal: string
}
class NxtTrendzServiceApi implements NxtTrenzService {
   networkCallWithFetch: (
      api: any,
      url: string,
      requestObject: Record<string, any>,
      type?: any
   ) => Promise<any>
   api: ApisauceInstance
   AppBaseUrl!: string

   constructor(networkCallWithFetch) {
      this.networkCallWithFetch = networkCallWithFetch
      this.api = create({
         baseURL: 'https://apis.ccbp.in'
      })
      this.AppBaseUrl = this.api.getBaseURL()
   }
   getAllProducts(endpointObj: endpointObjTypes) {
      const {
         activeOptionIdVal,
         activeCategoryVal,
         searchInputVal,
         activeRatingIdVal
      } = endpointObj
      const endpoint = `/products?sort_by=${activeOptionIdVal}&category=${activeCategoryVal}&title_search=${searchInputVal}&rating=${activeRatingIdVal}`
      return this.networkCallWithFetch(this.api, endpoint, {}, apiMethods.get)
   }
   getProductItemDetails(id: string) {
      const endpoint = `/products/${parseInt(id)}`
      return this.networkCallWithFetch(this.api, endpoint, {}, apiMethods.get)
   }
   getPrimeDeals() {
      const endpoint = '/prime-deals'
      return this.networkCallWithFetch(this.api, endpoint, {}, apiMethods.get)
   }
}
export default NxtTrendzServiceApi
