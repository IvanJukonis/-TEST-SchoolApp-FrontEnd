import "./addStudent.css";
import React, { Component } from "react";
import { isAuth, logOut } from "../../redux/actions/login";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddStudent extends Component {
  render() {
    return (
      <Formik>
        <Form>
          <div className="containerAddStudent">
            <h4> Sign up to SchoolApp</h4>

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
      </Formik>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
