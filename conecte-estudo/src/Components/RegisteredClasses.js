import React, { Component } from "react";
import Header from "./Header";
import "../Styles/RegisteredClasses.css";

export default class RegisteredClasses extends Component {
  render() {
    return (
      <div className="classMaterialsContainer">
        <Header />
        <div className="outerContainer">
          <div className="titleContainer">
            <span className="title">Turmas matriculadas</span>
          </div>
          <div className="classesContainer">
            <button className="classCard">
              C202
            </button>
            <button className="classCard">
              C202
            </button>
            <button className="classCard">
              C202
            </button>
            <button className="classCard">
              C202
            </button>
            <button className="classCard">
              C202
            </button>
          </div>
        </div>
      </div>
    );
  }
}
