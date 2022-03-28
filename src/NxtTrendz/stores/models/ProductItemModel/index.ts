import SimilarProductsModel from '../SimilarProductsModel'

class ProductItemModel {
   id: string
   imageUrl: string
   title: string
   price: string
   description: string
   brand: string
   totalReviews: string
   rating: string
   availability: string
   similarProducts: SimilarProductsModel[]
   constructor(data) {
      this.id = data.id
      this.imageUrl = data.image_url
      this.title = data.title
      this.price = data.price
      this.description = data.description
      this.brand = data.brand
      this.totalReviews = data.total_reviews
      this.rating = data.rating
      this.availability = data.availability
      this.similarProducts = data.similar_products.map(
         eachProduct => new SimilarProductsModel(eachProduct)
      )
   }
}

export default ProductItemModel
// {
//     id: '',
//     imageUrl: '',
//     title: '',
//     price: '',
//     description: '',
//     brand: '',
//     totalReviews: '',
//     rating: '',
//     availability: '',
//     similarProducts: [
//        {
//           id: '',
//           imageUrl: '',
//           title: '',
//           price: '',
//           description: '',
//           brand: '',
//           totalReviews: '',
//           rating: '',
//           availability: ''
//        }
//     ]
//  }
