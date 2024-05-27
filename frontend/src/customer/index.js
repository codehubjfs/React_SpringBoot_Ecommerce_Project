import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Provider } from "react-redux";
import App from "./App";
import store from "./CustomerStore";

ReactDOM.render(
  <Provider store={store}>
    <Router> {/* Wrap the App component with BrowserRouter */}
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

