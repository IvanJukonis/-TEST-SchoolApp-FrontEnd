import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//Single Components
import Home from "../components/home/home.js";
import Login from "../components/login/Login.js";
import Register from "../components/signup/register.js";
import Menu from "../components/menu/menu.js"
import store from "../redux/store/store";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

//Authentication Route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().users.token ? (
        //Show component in case of true (Token)
        <Component {...props} />
      ) : (
        //Redirect to home in case of false
        <Redirect to="/" />
      )
    }
  />
);

export default connect()(Routes);
