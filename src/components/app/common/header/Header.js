import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    return (
      <header id="header">
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <i className="fas fa-book-open" />
            </a>
            <ul className="categories">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React JS</a>
              </li>
              <li>
                <a href="#">Node JS</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
