import "./Hero.css"
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png' 
import hero_image from '../assets/hero_image.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Les nouveaux arrivages</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Nouveau</p>
            <img src={hand_icon} alt="hand icon"/>
          </div>
          <p>Collections</p>
          <p>pour tout le monde</p>
        </div>

        <div className="hero-latest-btn">
          <div>Dernières collecions</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>

      </div>


      <div className="hero-right">
        <img src={hero_image} alt="hero image" />
      </div>
    </div>
  )
}

export default Hero