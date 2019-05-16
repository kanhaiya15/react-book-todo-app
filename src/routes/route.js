import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
export default class AppRouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ } ex></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}