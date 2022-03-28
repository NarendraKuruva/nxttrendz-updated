class SimilarProductsModel {
   id: string
   imageUrl: string
   title: string
   price: string
   description: string
   brand: string
   totalReviews: string
   rating: string
   availability: string
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
   }
}
export default SimilarProductsModel
