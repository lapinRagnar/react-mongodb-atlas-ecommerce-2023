import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusivité</h1>
        <h1>pour toi</h1>
        <p>LES MEILLEURS PRODUITS UNIQUEMENT</p>
        <button>Maintenant</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="exculise image" />
      </div>
    </div>
  )
}

export default Offers