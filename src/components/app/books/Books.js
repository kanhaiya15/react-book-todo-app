import React, { Component } from "react";
import "./Books.css";
export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    return (
      <section id="books-section">
        <div className="container">
          <div className="section-title">
            <h1>HTML Books</h1>
          </div>
          <div className="books-container">
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
            <div className="book">
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
                <div className="book-call-to-action">
                  <button className="btn btn-highlight"> Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
