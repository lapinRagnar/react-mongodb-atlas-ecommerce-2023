import "./NewCollections.css"
import newCollections from "../assets/new_collections"
import Item from "../item/Item"
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NOUVEAUX COLLECTIONS</h1>
      <div className="collections">
        { newCollections.map((item, i) => {
          return <Item key={i} {...item} />
        })}
      </div>
    </div>
  )
}

export default NewCollections