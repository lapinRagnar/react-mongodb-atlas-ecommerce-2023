import { ShopContext } from '../../context/ShopContext'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <Link to={"/"}>
        <div className='nav-logo'>
          <img src={logo} alt='logo'/>
          <p>lapinRagnar</p>
        </div>
      </Link>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to={"/"}>
            Shop 
          </Link>  
          {menu==="shop" ? <hr/> : ""} 
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to={"/men"}>
            Homme 
          </Link>
          {menu==="men" ? <hr/> : ""}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to={"/women"}>
            Femme 
          </Link>
          {menu==="women" ? <hr/> : ""}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to={"/kids"}>
          Enfant 
          </Link>
          {menu==="kids" ? <hr/> : ""}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to={"/login"}>
          <button>Se Connecter</button>
        </Link>

        <Link to={"/cart"} className='nav-cart-link'>
          <img src={cart_icon} alt="cart" />
          <div className='nav-cart-count'>{ getTotalCartItems() }</div>
        </Link>
      
      </div>


    </div>
  )
}

export default Navbar