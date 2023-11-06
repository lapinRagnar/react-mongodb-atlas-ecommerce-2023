
import './css/ShopCategory.css'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import all_product from '../components/assets/all_product'
import Item from '../components/item/Item'

const ShopCategory = (props) => {

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner } alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>afficher [1-12]</span> sur 36 produits
        </p>
        <div className="shopcategory-sort">
          trié par <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} {...item} />
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Plus ...
      </div>
    </div>
  )
}

export default ShopCategory