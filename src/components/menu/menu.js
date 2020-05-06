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
        <table className="content-table-student">
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
            <tr className="active-row-student">
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
        </table>
        <div className="buttonsStudent">
          <a href="#modal" className="showPopUp">
            Agregar
          </a>
          <aside id="modal" className="modal">
            <div className="contentModal">
              <header>
                <a href="#" className="closeModal">
                  X
                </a>
                <h2>Add student</h2>
              </header>
              <article>
                <input
                  className="nameStudent"
                  type="text"
                  name="nameStudent"
                  placeholder="Name"
                />
                <input
                  className="lastNameStudent"
                  type="text"
                  name="lastNameStudent"
                  placeholder="Last name"
                />
                <input
                  className="ageStudent"
                  type="text"
                  name="ageStudent"
                  placeholder="Age"
                />
                <input
                  className="classStudent"
                  type="text"
                  name="classStudent"
                  placeholder="Class"
                />
                <button className="btnAddStudent">Add</button>
              </article>
            </div>
            <a href="#" className="btnCloseModal"></a>
          </aside>

          <button className="btnModStudent"> Modificar</button>
          <button className="btnDelStudent">Eliminar</button>
        </div>

        <table className="content-table-mark">
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
            <tr className="active-row-mark">
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
        </table>
        <div className="buttonsMark">
          <a href="#modalMark" className="showPopUpMark">
            Agregar
          </a>
          <aside id="modalMark" className="modalMark">
            <div className="contentModalMark">
              <header>
                <a href="#" className="closeModalMark">
                  X
                </a>
                <h2>Add mark</h2>
              </header>
              <article>
                <input
                  className="nameStudentMark"
                  type="text"
                  name="nameStudent"
                  placeholder="Name"
                />
                <input
                  className="lastNameStudentMark"
                  type="text"
                  name="lastNameStuden"
                  placeholder="Last name"
                />
                <input
                  className="subjectMark"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                <input
                  className="noteMark"
                  type="text"
                  name="note"
                  placeholder="Note"
                />

                <button id="btnAddMark">Add</button>
              </article>
            </div>
            <a href="#" className="btnCloseModalMark"></a>
          </aside>
          <button className="btnModMark"> Modificar</button>
          <button className="btnDelMark">Eliminar</button>
        </div>

        <div className="buttonLogOut">
          <Link className="btnLogOut" to="/login" onClick={this.props.logOut}>
            Log Out
          </Link>
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
