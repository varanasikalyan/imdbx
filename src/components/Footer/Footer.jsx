import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="myFooter">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 myCols">
                <h5>Get started</h5>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h5>About us</h5>
                <ul>
                  <li>
                    <Link to="/about">Company Information</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h5>Support</h5>
                <ul>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Help desk</Link>
                  </li>
                  <li>
                    <Link to="/">Forums</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link to="/">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-networks">
            <Link to="/" className="twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link to="/" className="facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="/" className="google">
              <i className="fab fa-google-plus" />
            </Link>
          </div>
          <div className="footer-copyright">
            <p>© 2018 Copyright IMDbx</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
