import "./menu.css";
import React, { Component } from "react";
import { AUTHENTICATION, logOut } from "../../redux/actions/login";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postStudent, fetchStudents } from "../../redux/actions/student";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      chek2: false,
    };
  }

  componentDidMount() {
    //el fetch va a al back y trae los estudiantes
    this.props.fetchStudents();
  }

  render() {
    console.log(this.props.studentList);
    return (
      <div className="containerMenu">
        <div
          className={this.state.check ? "overlayEnabled" : "overlayDisabled"}
        ></div>
        <div className={this.state.check ? "popUpEnabled" : "popUpDisabled"}>
          <Formik
            initialValues={{ name: "", lastname: "", age: "", class: "" }}
            onSubmit={(values) => {
              console.log("submitiaste");
              this.props.postStudent(values);
              this.setState((prevState) => ({ check: !prevState.check }));
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
                  <button
                    type="button"
                    className="btnAddStudent"
                    onClick={() =>
                      this.setState((prevState) => ({
                        check: !prevState.check,
                      }))
                    }
                  >
                    Back
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div
          className={
            this.state.check2 ? "overlayEnabledMark" : "overlayDisabledMark"
          }
        ></div>
        <div
          className={
            this.state.check2 ? "popUpEnabledMark" : "popUpDisabledMark"
          }
        >
          <Formik
            initialValues={{ student: "", subject: "", note: "" }}
            onSubmit={(values) => {
              this.props.postQualification(values);
              this.setState((prevState) => ({ check2: !prevState.check2 }));
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

                  <button className="btnAddMark" type="submit">
                    Add
                  </button>
                  <button
                    type="button"
                    className="btnAddMark"
                    onClick={() =>
                      this.setState((prevState) => ({
                        check2: !prevState.check2,
                      }))
                    }
                  >
                    Back
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <table className="content-table-student">
          <thead>
            <tr>
              <th>Select</th>
              <th>id</th>
              <th>name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {this.props.studentList &&
              this.props.studentList.map((student) => {
                // muestra los estudiantes si existen y sino no muestra nada, por cada estudiante devuelve una fila "tr", cada vez que se agrega uno nuevo se ejecuta otra vez el map
                return (
                  <tr>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>{student._id}</td>
                    <td>{student.name}</td>
                    <td>{student.lastname}</td>
                    <td>{student.age}</td>
                    <td>{student.class}</td>
                  </tr>
                );
              })}
          </tbody>
          <button
            className="btnAdd"
            onClick={() =>
              this.setState((prevState) => ({ check: !prevState.check }))
            }
          >
            Add
          </button>
          <button className="btnModify">Modify</button>
          <button className="btnDelete">Delete</button>
        </table>

        <table className="content-table-mark">
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Last name</th>
              <th>Subject</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox"></input>
              </td>
              <td>1</td>
              <td>Domenic</td>
              <td>88,110</td>
              <td>dcode</td>
            </tr>
          </tbody>
          <button
            className="btnAdd"
            onClick={() =>
              this.setState((prevState) => ({ check2: !prevState.check2 }))
            }
          >
            Add
          </button>
          <button className="btnModify">Modify</button>
          <button className="btnDelete">Delete</button>
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
    authentication: state.AUTHENTICATION,
    studentList: state.students.students, // trae los estudiantes
  };
};

const mapDispatchToProps = {
  AUTHENTICATION,
  logOut,
  postStudent,
  fetchStudents,
};
//mapstatetoprops = lo que vas a leer
//mapdispatchtoprops = acciones q vas a usar
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
