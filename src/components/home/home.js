import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="containerHome">
        <div className="header">
          <div className="title">
            <h1 className="text1">School App</h1>
            <h1 className="text2">Welcome</h1>
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link className="login" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                {" "}
                <Link className="register" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="section">
            <h2 className="headerInfo">Information</h2>
            <p>
            This is a web application designed by students Ivan Jukonis and Santiago Ottolini from UAI university. 
            The objective of this application is to demonstrate the knowledge acquired on the subject MCGA dictated by professor David Curras.<br></br>
            The idea of ​​the website is to recreate the functionality of a student grade record used by teachers. 
            Here you will interact with a list of students and a list of their grades.<br></br>
            Access to the page will be given through a login with the corresponding security measures.
            </p>         
          </div>
        </div>
      </div>
    );
  }
}
//Get state
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    authentication: state.Authentication,
  };
};
//Dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
