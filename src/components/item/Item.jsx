import { Link } from 'react-router-dom'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={window.scrollTo(0, 0)}>
        <img src={props.image} alt="" height={200}/>
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_price} €
        </div>
        <div className="price-tem-old">
          {props.old_price} €
        </div>
      </div>
    </div>
  )
}

export default Item