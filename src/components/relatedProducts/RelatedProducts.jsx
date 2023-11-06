import './RelatedProducts.css'
import data_product from '../assets/data'
import Item from '../../components/item/Item'
const RelatedProducts = () => {



  return (
    <div className='relatedproducts'>
      <h1>Related products </h1>
      <hr />
      <div className="relatedproducts-item">
        { data_product.map((item, i) => {
          return <Item key={i} {...item}/>
        })}
      </div>

    </div>
  )
}

export default RelatedProducts