import React, { Component } from 'react';
//Traigo 4 props de librearia para manipulacion de rutas
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//REVISAR COMPONENTES INDIVIDUALES
import Home from '../components/home/publicHome.js';

import Login from '../components/login/login.js';
import Login from '../components/signup/register.js';
import store from '../redux/store/store';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Redirect from='/' to='/home' />

        </Switch>
      </BrowserRouter>
    );
  }
}

//Revisamos si existe el token (preguntar bien como funciona)
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().users.token ? (
        //En caso de tener el toquen muestra el componente
        <Component {...props} />
      ) : (
        //sino de redirecciona
        <Redirect to='/' />
      )
    }
  />
);

export default connect()(Routes);
