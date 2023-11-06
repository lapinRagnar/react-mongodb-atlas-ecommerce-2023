import { useParams } from "react-router-dom"
import Breadcrum from "../components/breadcrums/Breadcrum"
import ProductDisplay from "../components/productDisplay/ProductDisplay"
import DescriptionBox from "../components/descriptionBox/DescriptionBox"
import RelatedProducts from "../components/relatedProducts/RelatedProducts"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


const Product = () => {

  const {all_product} = useContext(ShopContext)

  let {productId} = useParams()

  const product = all_product.find(product => product.id == Number(productId))
  console.log('product', product)

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product