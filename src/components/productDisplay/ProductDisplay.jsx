import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
const ProductDisplay = (props) => {

  const {product} = props

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-image-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} className="productdisplay-main-img" alt="product" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="start icon" />
          <img src={star_icon} alt="start icon" />
          <img src={star_icon} alt="start icon" />
          <img src={star_icon} alt="start icon" />
          <img src={star_dull_icon} alt="start icon" />
          <p>(54</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            {product.old_price} €
          </div>

          <div className="productdisplay-right-price-new">
            {product.new_price} €
          </div>

        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae modi adipisci nisi nesciunt. Est, vero cum sapiente laudantium, voluptate sint soluta voluptatum nostrum ex ipsa iusto facilis sed unde.
        </div>

        <div className="productdisplay-right-size">
          <h1>Selectionner la taille</h1>  
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button>Ajouter au panier</button>

        <p className="productdisplay-right-category"><span>Category: </span> Woman, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags: </span> Modern, Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay