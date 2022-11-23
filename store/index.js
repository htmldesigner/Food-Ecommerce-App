import {createContext, useContext} from 'react';
import Cart from './Cart';

class RootStore {
  constructor() {
    this.cart = new Cart();
  }
}

export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
