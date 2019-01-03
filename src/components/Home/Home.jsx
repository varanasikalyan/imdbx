import React, { Component } from "react";
import Search from "../Search/Search";
import "./Home.css";

class Home extends Component {
  render() {
    var x1 = 1;
    var y1 = 2;
    var x2 = 1;
    var y2 = 9;
    var imageUrl = require("../../static/images/welcome/welcome" +
      Math.floor(Math.random() * (y1 - x1 + 1) + x1) +
      "_" +
      Math.floor(Math.random() * (y2 - x2 + 1) + x2) +
      ".jpg");
    var bgImage = {
      backgroundImage: `url(${imageUrl})`
    };
    return (
      <div
        id="splashScreen"
        style={bgImage}
        className="container-fluid splash-screen">
        <Search/>
      </div>
    );
  }
}

export default Home;
