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
        <table class="content-table-student">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Domenic</td>
              <td>88,110</td>
              <td>dcode</td>
            </tr>
            <tr class="active-row-student">
              <td>2</td>
              <td>Sally</td>
              <td>72,400</td>
              <td>Students</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
              <td>dcode</td>
            </tr>
          </tbody>
          <div className="buttonsStudent">
            <button className="btnAddStudent">Agregar</button>
            <button className="btnModStudent"> Modificar</button>
            <button className="btnDelStudent">Eliminar</button>
          </div>
        </table>

        <table class="content-table-mark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>Subject</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Domenic</td>
              <td>88,110</td>
              <td>dcode</td>
            </tr>
            <tr class="active-row-mark">
              <td>2</td>
              <td>Sally</td>
              <td>72,400</td>
              <td>Students</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
              <td>dcode</td>
            </tr>
          </tbody>
          <div className="buttonsMark">
            <button className="btnAddMark">Agregar</button>
            <button className="btnModMark"> Modificar</button>
            <button className="btnDelMark">Eliminar</button>
          </div>

          <div className="buttonLogOut">
            <Link className="btnLogOut" to="/login" onClick={this.props.logOut}>
              Log Out
            </Link>
          </div>
        </table>
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
