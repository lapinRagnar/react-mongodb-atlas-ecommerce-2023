import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} className="footer-logo" alt="footer logo" />
        <p>NOS CLIENTS</p>
      </div>
      <ul className='footer-link'>
        <li>Notre Enseigne</li>
        <li>Produits</li>
        <li>Nos boutiques</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" height={25}/>
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="instagram" height={25} />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="instagram" height={25} />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="instagram" height={25} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - tous droits réservés</p>
      </div>
    </div>
  )
}

export default Footer