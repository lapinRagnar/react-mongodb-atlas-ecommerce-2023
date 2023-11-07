import {ShopContext} from '../../context/ShopContext'
import { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {

  const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext) || {}

  console.log("all_product dans CartItems", all_product, cartItems, removeFromCart)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Produits</p>
        <p>Titre</p>
        <p>Prix</p>
        <p>Quantité</p>
        <p>Total</p>
        <p>Supprimer</p>
      </div>
      <hr />
      { all_product.map((item, i) => {
        if (cartItems[item.id] > 0) {
          return (<div key={i}>

            <div className="cartitems-format cartitems-format-main" >
              <img src={item.image} alt="product" className='carticon-product-icon' />
              <p>{item.name}</p>
              <p>{item.new_price} €</p>
              <button className='cartitems-quantity'>{cartItems[item.id]}</button>
              <p>{cartItems[item.id] * item.new_price} €</p>
              <img className='cartitem-remove-icon' src={remove_icon} alt="icon" onClick={() => removeFromCart(item.id)} />
            </div>
            <hr />
          
          </div>)
        }

        return null
      })

      }

      <div className='cartitems-down'>
        <div className="cartitems-total">
          <h1>Total du panier</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Sous-total</p>
              <p>{getTotalCartAmount()} €</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Frais de livraison</p>
              <p>Gratuit</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()} €</h3>
            </div>
            <button>Commander</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>si vous avez un code promo</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Valider</button>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default CartItems


