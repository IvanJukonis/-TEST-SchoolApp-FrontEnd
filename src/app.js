import React, { Component } from 'react'
import {Provider} from 'react-redux'
//Traigo el store
import store from './redux/store/store'
//Traigo las rutas
import Routes from './routes/view'


class App extends Component{

    //En caso que tengamos que montar un componente

  /*componentWillMount(){
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    } 
  }*/

  render() {
    return (
        //Provider habilita el store para todas las rutas
    <Provider store={store}>
      <Routes/>
    </Provider>
    )
    
  }
}
//SE EXPORTA "App"
export default App;
