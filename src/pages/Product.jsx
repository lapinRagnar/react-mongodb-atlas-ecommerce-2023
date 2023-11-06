import { useParams } from "react-router-dom"
import Breadcrum from "../components/breadcrums/Breadcrum"
import ProductDisplay from "../components/productDisplay/ProductDisplay"


const Product = (props) => {

  const {all_product} = props
  console.log('all_product dans Product.jsx', all_product)

  let {productId} = useParams()
  console.log('porductId', productId)

  const product = all_product.find(product => product.id == Number(productId))
  console.log('product', product)

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product