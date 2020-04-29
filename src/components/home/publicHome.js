
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import "./publicHome.css"

class publicHome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='title'>
            <h1>SchoolApp</h1>
          </div>
        </div>
        <div className='home'>
          <div className='login'>
            <button><Link to='/login'>Login</Link></button>
          </div>
          <div className='register'>
            <button> <Link to='/register'>Register</Link></button>
          </div>
          <div className='information'>
            <button><Link to='/information'>information</Link></button>
          </div>
          <div className='contact'>
            <button><Link to='/contact'>Contacto</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

//pasar los estados de la aplicacion en el home
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isAuth: state.isAuth
  }
}

//despacho el estado
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(publicHome)