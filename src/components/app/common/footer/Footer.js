import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <p> Made with &hearts; La la la</p>
        </div>
      </footer>
    );
  }
}
