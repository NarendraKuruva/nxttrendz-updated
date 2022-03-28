interface endpointObjTypes {
   activeOptionIdVal: string
   activeCategoryVal: string
   activeRatingIdVal: string
   searchInputVal: string
}
interface NxtTrenzService {
   getAllProducts(endpointObject: endpointObjTypes): Promise<any>
   getProductItemDetails(url: string): Promise<any>
   getPrimeDeals(): Promise<any>
}
export default NxtTrenzService
