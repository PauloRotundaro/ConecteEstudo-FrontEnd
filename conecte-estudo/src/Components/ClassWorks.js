import React, { Component } from "react";
import Header from "./Header";
import "../Styles/ClassWorks.css";
import axios from "axios";
import { Assignment } from "@mui/icons-material";

export default class ClassWorks extends Component {

  state = {
    assignments: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/classAssignment/1`)
      .then(res => {
        const assignments = res.data;
        console.log(assignments);
        this.setState({ assignments });
      })
  }

  render() {
    return (
      <div className="classWorksContainer">
        <Header />
        <div className="outerContainer">
          <div className="classWorkstitleContainer">
            <span className="title">Trabalhos de C202</span>
          </div>
          <div className="worksContainer">
            {
              this.state.assignments.map(assignment =>
                assignment.user == 40 ? <div key={assignment.assignmentId} className="workCard"><span className="workTitle">{assignment.title}</span><span className="workClassName">C202 - A (2022/1)</span></div> : <div key={assignment.assignmentId}></div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
