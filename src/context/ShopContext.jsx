import { createContext, useState } from "react"
import all_product from '../components/assets/all_product'

export const ShopContext = createContext()

const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0      
  }
  return cart
}

const ShopContextProvider = ({children}) => {
  

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const contextValue = {all_product, cartItems, setCartItems}

  console.log('cartItems', cartItems)


  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider