import React, { Component } from "react";
import Search from "../Search/Search";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Search/>
      </div>
    );
  }
}

export default Home;
