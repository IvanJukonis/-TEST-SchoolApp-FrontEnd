import "./publicHome.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class publicHome extends Component {
  render() {
    return (
      <div className="containerHome">
        <div className="header">
          <div className="title">
            <h1 className="text1">School App</h1>
            <h1 className="text2">Bienvenidos</h1>
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link className="login" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                {" "}
                <Link className="register" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="contact" to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="section">
            <h2>Information</h2>
            <p>
              Escribi aca ivan en ingles la info de lo que hace
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
            </p>
            <p>
              Escribi aca ivan en ingles la info de lo que hace
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
            </p>
            <p>
              Escribi aca ivan en ingles la info de lo que hace
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
            </p>
            <p>
              Escribi aca ivan en ingles la info de lo que hace
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
            </p>
            <p>
              Escribi aca ivan en ingles la info de lo que hace
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssssssssssssssssssssssssssssssss
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//pasar los estados de la aplicacion en el home
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    isAuth: state.isAuth,
  };
};

//despacho el estado
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(publicHome);
