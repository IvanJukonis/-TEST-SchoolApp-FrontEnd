import React, { Component } from "react"
import {Provider} from "react-redux"
//Traigo el store
import store from "./redux/store/store"
//Traigo las rutas
import Routes from "./routes/view"


class App extends Component{
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
