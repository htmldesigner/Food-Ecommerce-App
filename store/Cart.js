import {makeAutoObservable} from 'mobx';

export default class Cart {
  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCart(item) {
    return this.cart.push(item);
  }
  removeCart(id) {
    return (this.cart = this.cart.filter(item => item.id !== id));
  }

  get cartCount() {
    return this.cart.length;
  }
}
