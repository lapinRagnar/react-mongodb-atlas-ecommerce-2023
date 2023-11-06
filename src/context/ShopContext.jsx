import { createContext } from "react"
// import all_product from '../components/assets/all_product'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  
  console.log('props dans ShopContextProvider', props)
  const contextValue = props


  return (
    <ShopContext.Provider value={{...contextValue}}>
      <props.children />
    </ShopContext.Provider>
  )
}

export default {ShopContextProvider}