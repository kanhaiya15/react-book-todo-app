import React, { Component } from "react";
import "./BookDetail.css";
export default class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    return (
      <section id="book-detail">
        <div className="container">
          <div className="book-container">
            <div className="book-img">
              <img src="https://via.placeholder.com/250x200" alt="" />
            </div>
            <div className="book-info">
              <div className="book-title">
                <h3> Book Title</h3>
              </div>
              <div className="book-author">
                <p>
                  {" "}
                  By <em>Author</em>
                </p>
              </div>
              <div className="book-description">
                <p>
                  {" "}
                  By <em>Author</em>
                </p>
              </div>
            </div>
            <div className="book-review-container">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="book-review"> (11) </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
