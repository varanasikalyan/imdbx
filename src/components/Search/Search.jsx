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
      <div className="container search content">
        <div className="row">
          <div className="col-lg">
            <input
              placeholder = "Find Movies, TV shows, Celebrities and more..."
              ref = {input => this.search = input}
              onChange = {this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p>{this.state.query}</p>
          </div>
        </div>
      </div>
    )
  }
 }

 export default Search