import './register.css'
import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { postUser } from "../../redux/actions/login";
import { Link } from "react-router-dom";


class Register extends Component {
    render() {
        return (
            <Formik

                initialValues={{ name: "", password: "" }}
                onSubmit={(values) => { this.props.postUser(values) }} >

                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="containerRegister">
                            <h4> Sign up to SchoolApp</h4>
                           
                                <Field
                                    type="text"
                                    className="registerUser"
                                    name="name"
                                    placeholder="Name"
                                ></Field>                           
                                <Field
                                    type="text"
                                    className="registerPassword"
                                    name="name"
                                    placeholder="Password"
                                ></Field>
                           
                            <div className="btnRegisterLinks">
                                <button className='btnSubmit' type='submit'> Sign Up  </button>
                                <p><Link className="btnBackHome" to="/home">Back to home</Link></p>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
    isLoading: state.isLoading
});

export default connect(mapStateToProps, { postUser })(Register);
