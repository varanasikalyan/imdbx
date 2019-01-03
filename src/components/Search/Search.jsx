import React,  {Component }from 'react'
import './Search.css';

class Search extends Component {
  state =  {
    query:'', 
  }
 
  handleInputChange = () =>  {
    this.setState( {
      query:this.search.value
    })
  }
 
  render() {
    return ( 
      <div className="search content">
        <input
          placeholder = "Find Movies, TV shows, Celebrities and more..."
          ref = {input => this.search = input}
          onChange = {this.handleInputChange}
          className = "search-input"
        />
        <p>{this.state.query}</p>
      </div>        
    )
  }
 }

 export default Search