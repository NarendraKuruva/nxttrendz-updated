class ProductModel {
   id: string
   imageUrl: string
   title: string
   price: string
   brand: string
   rating: string
   constructor(data) {
      this.id = data.id
      this.imageUrl = data.image_url
      this.title = data.title
      this.price = data.price
      this.brand = data.brand
      this.rating = data.rating
   }
}

export default ProductModel
