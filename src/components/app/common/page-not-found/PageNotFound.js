import React, { Component } from "react";
import "./PageNotFound.css";
export default class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    return (
      <section id="page-not-found">
        <div className="container">
          <h1>Page Not Found</h1>
        </div>
      </section>
    );
  }
}
