import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Components/Home";
import LoginPage from "../Components/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Content />
          {/* <Header /> */}
          {/* <Home></Home> */}
          {/* <LoginPage></LoginPage> */}
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}

export default App;