import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { logIn } from "../../redux/actions/login";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

class Register extends Component {
    render() {
        return (
            <Formik

                initialValues={{ name: "", password: "" }}
                onSubmit={(values) => { this.props.postUser(values) }} >

                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="containerRegister">
                            <h5> Sign up to SchoolApp</h5>
                            <div className="userRegister">

                                <Field
                                    type="text"
                                    className="user"
                                    name="name"
                                    placeholder="Name"

                                ></Field>
                            </div>
                            <div className="passwordRegister">
                                <Field
                                    type="text"
                                    className="password"
                                    name="name"
                                    placeholder="Password"
                                ></Field>

                            </div>
                            <div className="btnLinks">
                                <p><Link className="btnCreateAccount" to="/register">Create Account</Link></p>
                                <p><Link className="btnHome" to="/home">Back to home</Link></p>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}
