import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Content from "../Components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Content />
        </Router>
      </div>
    );
  }
}

export default App;