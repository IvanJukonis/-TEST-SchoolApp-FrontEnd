import "./menu.css";
import React, { Component } from "react";
import { isAuth, logOut } from "../../redux/actions/login";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { postStudent } from "../../redux/actions/student";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      chek2: false
    };

  };
  render() {
    console.log(this.state.check)
    return (
      <div className="containerMenu">
        <div className={this.state.check ? "overlayEnabled" : "overlayDisabled"}></div>
        <div className={this.state.check ? "popUpEnabled" : "popUpDisabled"}>
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
                    name="name"
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
                  <button className="btnAddStudent" onClick={() => this.setState(prevState => ({ check: !prevState.check }))}>Back</button>
                  
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className={this.state.check2 ? "overlayEnabledMark" : "overlayDisabledMark"}></div>
        <div className={this.state.check2 ? "popUpEnabledMark" : "popUpDisabledMark"}>
          <Formik
            initialValues={{ student: "", subject: "", note: "" }}
            onSubmit={(values) => {
              this.props.postQualification(values);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="containerAddMarks">
                  <h4> Add Notes</h4>

                  <Field
                    type="text"
                    className="nameStudentMark"
                    name="student"
                    placeholder="Name"
                  />

                  <Field
                    type="text"
                    className="subjectMark"
                    name="subject"
                    placeholder="Subject"
                  />

                  <Field
                    type="text"
                    className="noteMark"
                    name="note"
                    placeholder="Note"
                  />

                  <button className="btnAddMark" type="submit" onClick="close_window1()">
                    Add
                   </button>
                   <button className="btnAddMark" onClick={() => this.setState(prevState => ({ check2: !prevState.check2 }))}>Back</button>
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
          <button onClick={() => this.setState(prevState => ({ check: !prevState.check }))}>Agregar</button>
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
          <button onClick={() => this.setState(prevState => ({ check2: !prevState.check2 }))}>Agregar</button>
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
//mapstatetoprops = lo que vas a leer
//mapdispatchtoprops = acciones q vas a usar
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
