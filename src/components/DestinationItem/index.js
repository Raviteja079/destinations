// Write your code here
import './index.css'

const ItemCard = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails

  return (
    <li className="destinationCard">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default ItemCard
