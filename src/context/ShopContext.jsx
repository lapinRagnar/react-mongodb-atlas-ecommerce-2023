import { createContext, useState } from "react"
import all_product from '../components/assets/all_product'

export const ShopContext = createContext()

const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0      
  }
  return cart
}

const ShopContextProvider = ({children}) => {
  

  const [cartItems, setCartItems] = useState(getDefaultCart())


  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    console.log("cartItems dans addToCart fonction", cartItems)
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.new_price
      }
    }
    return totalAmount
  }

  const getTotalCartItems = () => {
    let totalItem = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem
  }  

  const contextValue = {all_product, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}


  return (
    <ShopContext.Provider value={{...contextValue}}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider