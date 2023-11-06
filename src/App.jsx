
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

import { ShopContext } from './context/ShopContext'
import all_product from './components/assets/all_product'

function App() {



  return (
    <div>

      <ShopContext.Provider value={{men_banner, women_banner, kids_banner, all_product}}>

        <BrowserRouter>
        
          <Navbar />

          <Routes>
            <Route path="/" element={<Shop />}  />
            <Route path="/men" element={<ShopCategory banner={men_banner} all_product={all_product}  category="men" />}  />
            <Route path="/women" element={<ShopCategory banner={women_banner} all_product={all_product}  category="women" />}  />
            <Route path="/kids" element={<ShopCategory banner={kids_banner} all_product={all_product}  category="kid" />}  />

            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}/>
            </Route>
            <Route path="/cart" element={<Cart />}  />
            <Route path="/login" element={<LoginSignup />}  />
          </Routes>

          <Footer />
        
        </BrowserRouter>
      
        </ShopContext.Provider>
  
    </div>
  )
}

export default App
