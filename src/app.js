import React, { Component } from "react";
import { Provider } from "react-redux";
//Bring the store
import store from "./redux/store/store";
//Bring the roads
import Routes from "./routes/view";

class App extends Component {
  render() {
    return (
      //Provider: enable the store for everyone routes
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
export default App;
