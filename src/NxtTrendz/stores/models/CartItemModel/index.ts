import { action, computed, observable } from 'mobx'

class CartItemModel {
   id: string
   title: string
   brand: string
   @observable quantity: number
   price: string
   imageUrl: string
   constructor(data) {
      this.id = data.id
      this.title = data.title
      this.brand = data.brand
      this.price = data.price
      this.imageUrl = data.imageUrl
      this.quantity = data.quantity
   }
   @computed get ItemQuantity(): number {
      return this.quantity
   }
   @action.bound increaseQuantity = (): void => {
      this.quantity++
   }
   @action.bound decreaseQuantity(): void {
      if (this.quantity > 1) {
         this.quantity--
      }
   }
}

export default CartItemModel
