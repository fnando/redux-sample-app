import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";

import { store } from "./config/store";
import { HomeScreen } from "./components/HomeScreen";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
