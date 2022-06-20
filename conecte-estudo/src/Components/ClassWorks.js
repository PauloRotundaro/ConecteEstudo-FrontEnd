import React, { Component } from "react";
import Header from "./Header";
import "../Styles/ClassWorks.css";

export default class ClassWorks extends Component {
  render() {
    return (
      <div className="classWorksContainer">
        <Header />
        <div className="outerContainer">
          <div className="classWorkstitleContainer">
            <span className="title">Trabalhos de C202</span>
          </div>
          <div className="worksContainer">
            <div className="workCard">
                <span className="workTitle">Tarefa 1 - Lista de Exercícios</span>
                <span className="workClassName">C202 - A (2022/1)</span>
            </div>
            <div className="workCard">
                <span className="workTitle">Tarefa 1 - Lista de Exercícios</span>
                <span className="workClassName">C202 - A (2022/1)</span>
            </div>
            <div className="workCard">
                <span className="workTitle">Tarefa 1 - Lista de Exercícios</span>
                <span className="workClassName">C202 - A (2022/1)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
