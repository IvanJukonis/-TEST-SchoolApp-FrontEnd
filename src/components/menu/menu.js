import "./menu.css";
import React, { Component } from "react";
import { Authentication, logOut } from "../../redux/actions/login";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  postStudent,
  fetchStudents,
  deleteStudent,
} from "../../redux/actions/student";
import {
  postQualification,
  fetchQualifications,
  deleteQualification,
} from "../../redux/actions/qualification";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //PopUp overlayState
      check: false,
      chek2: false,
    };
  }
  componentDidMount() {
    //Get students and qualifications from backend api rest
    this.props.fetchStudents();
    this.props.fetchQualifications();
  }

  render() {
    console.log(this.props.qualificationList);
    return (
      <div className="containerMenu">
        {/*PopUp*/}
        <div
          className={this.state.check ? "overlayEnabled" : "overlayDisabled"}
        ></div>
        <div className={this.state.check ? "popUpEnabled" : "popUpDisabled"}>
          {/*Start Formik students*/}
          <Formik
            initialValues={{ name: "", lastname: "", age: "", class: "" }}
            onSubmit={(values) => {
              //Call action "postStudent"
              this.props.postStudent(values);
              this.setState((prevState) => ({ check: !prevState.check }));
            }}
            //Formik validation
            validationSchema={Yup.object().shape({
              name: Yup.string().min(2).required("Required"),
              lastname: Yup.string().min(2).required("Required"),
              age: Yup.number().min(2).required("Required"),
              class: Yup.string().min(2).required("Required"),
            })}
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
                  {/*Close PopUp*/}
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
          {/*Start Formik qualification*/}
          <Formik
            initialValues={{ studentId: "", subject: "", note: "" }}
            onSubmit={(values) => {
              //Call action "postQualification"
              this.props.postQualification(values);
              this.setState((prevState) => ({ check2: !prevState.check2 }));
            }}
            //Formik validation
            validationSchema={Yup.object().shape({
              studentId: Yup.string().min(2).required("Required"),
              subject: Yup.string().min(2).required("Required"),
              note: Yup.number().min(2).required("Required"),
            })}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="containerAddMarks">
                  <h4> Add Notes</h4>
                  <Field
                    type="text"
                    as="select"
                    className="nameStudentMark"
                    name="studentId"
                    placeholder="Student"
                  >
                    <option defaultValue>Select an student</option>
                    {this.props.studentList.map((student) => {
                      return (
                        <option
                          //The id is saved into the values of formik
                          value={student._id}
                          //Concatenate the name student with the lastname
                        >{`${student.name}-${student.lastname}`}</option>
                      );
                    })}
                  </Field>
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
                  {/*Close PopUp*/}
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
              {/*Name of the columns*/}
              <th>Actions</th>
              <th>Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {this.props.studentList &&
              this.props.studentList.map((student) => {
                //Show the students if they exist. For each student return a row. Everytime it is run a new one is added
                return (
                  <tr>
                    <td>
                      <button
                        className="btnDeleteStudent"
                        onClick={() => {
                          //Call action "deleteStudent"
                          this.props.deleteStudent(student._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    {/*Bring the atributte of the student*/}
                    <td>{student.name}</td>
                    <td>{student.lastname}</td>
                    <td>{student.age}</td>
                    <td>{student.class}</td>
                  </tr>
                );
              })}
          </tbody>
          {/*Open PopUp*/}
          <button
            className="btnAdd"
            onClick={() =>
              this.setState((prevState) => ({ check: !prevState.check }))
            }
          >
            Add
          </button>
        </table>
        <table className="content-table-mark">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Student</th>
              <th>Subject</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {this.props.qualificationList &&
              this.props.qualificationList.map((qualification) => {
                //Show the qualification if they exist. For each qualification return a row. Everytime it is run a new one is added
                return (
                  <tr>
                    <button
                      className="btnDeleteQualification"
                      onClick={() => {
                        //Call action "deleteQualification"
                        this.props.deleteQualification(qualification._id);
                      }}
                    >
                      Delete
                    </button>
                    {/*Bring the atributte of the student*/}
                    <td>{`${qualification.student.name}-${qualification.student.lastname}`}</td>
                    <td>{qualification.subject}</td>
                    <td>{qualification.note}</td>
                  </tr>
                );
              })}
          </tbody>
          {/*Open PopUp*/}
          <button
            className="btnAdd"
            onClick={() =>
              this.setState((prevState) => ({ check2: !prevState.check2 }))
            }
          >
            Add
          </button>
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
    studentList: state.students.students, // Bring the students
    qualificationList: state.qualifications.qualifications, //Bring the qualification
  };
};
//Call  actions
const mapDispatchToProps = {
  Authentication,
  logOut,
  postStudent,
  fetchStudents,
  postQualification,
  fetchQualifications,
  deleteStudent,
  deleteQualification,
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
