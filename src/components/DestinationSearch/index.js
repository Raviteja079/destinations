// Write your code here
import {Component} from 'react'
import ItemCard from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: '', newList: ''}

  onSearchInputChange = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput, newList} = this.state
    console.log(newList)
    return (
      <div className="bg">
        <div className="top-section">
          <h1>Destination Search</h1>
          <div className="searchBar">
            <input
              className="inputEl"
              type="search"
              placeholder="search"
              value={searchInput}
              onChange={this.onSearchInputChange}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="image-1"
              alt="search icon"
            />
          </div>
        </div>

        <ul className="card">
          {destinationsList.map(eachItem => (
            <ItemCard itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
