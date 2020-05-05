import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isAuth, logOut } from '../../redux/actions/login'

class Menu extends Component {
  render() {
    return (
      <p>este es el menu</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = {
  isAuth,
  logOut
}

/*const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {  isAuth, logOut },
    dispatch
  )
*}*/

export default connect(mapStateToProps, mapDispatchToProps)(Menu)