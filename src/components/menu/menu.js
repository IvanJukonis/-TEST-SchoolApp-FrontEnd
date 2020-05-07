import "./menu.css";
import React, { Component } from "react";
import { isAuth, logOut } from "../../redux/actions/login";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="containerMenu">
        <div className="titleMenu">
          <h3> Menu</h3>
        </div>
        <div className='buttonmenu'>
          <Link to='/home' onClick={this.props.logOut}>
            Logout
          </Link>
        </div>
        <div className="containerLeft">
          <h3>Students</h3>
        </div>

        <div className="buttonsLeft">
          <button className="btnAddLeft">Agregar</button>
          <button className="btnModLeft"> Modificar</button>
          <button className="btnDelLeft">Eliminar</button>
        </div>
        <div className="containerRight">
          <h3>Marks</h3>
        </div>

        <div className="buttonsRight">
          <button className="btnAddRight">Agregar</button>
          <button className="btnModRight"> Modificar</button>
          <button className="btnDelRight">Eliminar</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = {
  isAuth,
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
