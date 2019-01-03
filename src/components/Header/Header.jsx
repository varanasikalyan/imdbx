import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="logo-prefix">Welcome to</span>
            <Link to="/" className="navbar-brand">  
              <img
                src={require("../../static/images/logo/logo.png")}
                alt="IMDbx Logo"
                className="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsOptions"
              aria-controls="navbarsOptions"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsOptions">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item padding">
                  <span className="logo-suffix">an Advanced search engine for IMDb</span>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signin" className="nav-item nav-link">
                    <img
                      src={require("../../static/images/login.png")}
                      className="icon"
                      alt="IMDbx"
                    />
                    <span className="icon-text">Sign In</span>
                  </Link>
                </li>
                <li className="nav-item border-button">
                  <Link to="/signup" className="nav-item nav-link">
                    <img
                      src={require("../../static/images/signup.png")}
                      className="icon"
                      alt="IMDbx"
                    />
                    <span className="icon-text">Join Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
