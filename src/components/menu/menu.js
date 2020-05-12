import "./menu.css";
import React, { Component } from "react";
import { isAuth, logOut } from "../../redux/actions/login";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { postStudent } from "../../redux/actions/student";

class Menu extends Component {
  render() {
   
    return (
      <div className="containerMenu">
        <div className="overlayEnabled"></div>

        <div className="popUpEnabled">
          <Formik
            initialValues={{ name: "", lastname: "", age: "", class: "" }}
            onSubmit={(values) => {
              console.log("submitiaste");
              this.props.postStudent(values);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="containerAddStudent">
                  <h4> Add Students</h4>
                  <Field
                    type="text"
                    className="nameStudent"
                    name="student"
                    placeholder="Name"
                  />

                  <Field
                    type="text"
                    className="lastnameStudent"
                    name="lastname"
                    placeholder="Last name"
                  />

                  <Field
                    type="text"
                    className="ageStudent"
                    name="age"
                    placeholder="Age"
                  />

                  <Field
                    type="text"
                    className="classStudent"
                    name="class"
                    placeholder="Class"
                  />

                  <button className="btnAddStudent" type="submit">
                    Add
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
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
          <button>Agregar</button>
        </table>

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
          <button>Agregar</button>
        </table>

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
  postStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
