import React, {Component} from 'react'
import '../SearchPrize/SearchPrize.css'

import { API_URL} from "../../../constants";
import axios from 'axios';
import PrizeList from '../../../pages/Prize/PrizeList';





class SearchPrize extends Component {
  constructor (props) {
    super(props)

    console.log('1. Constructor')

    this.state = {
      prizes: [],
      filterText: "",
    }
  }

componentDidMount(){
  console.log('3. componentDidMount')
  this.getPrizes()
}

handleTextChange = (e, keyText) => {
  const value = e.target.value;
  this.setState({ [keyText]: value })
}


getPrizes = () => {
  axios.get(`${API_URL}/prizes`)
  .then(response => {
      this.setState({prizes: response.data}
      )
  })
  .catch(function(error){
      console.log(error)
  })
}



  render () {
    console.log('2. render()')
    const {
      prizes,
      filterText,
    } = this.state;
  
    const filteredPrizes = prizes.filter(prize => prize.name.includes(filterText));

  return (
    <>
       
          <div className="filter-container">
          <input
            onChange={(e) => this.handleTextChange(e, "filterText")}
            placeholder="Filter prize by name"
            className="filter-field"
            type="text"
            value={filterText}
          />
        </div>
  
        <main className="color-cards-container">
          {filteredPrizes.map(prize => (
            <h1>{prize.name}</h1>
          ))}
        </main>
     
    </>
  );
  }

}

export default SearchPrize

