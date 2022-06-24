import React, { Component } from "react";
import Header from "./Header";
import "../Styles/ClassWorks.css";
import axios from "axios";
export default class ClassWorks extends Component {

  state = {
    userId: 0,
    classId: 0,
    assignments: [],
    classRoomName: ''
  }

  componentDidMount() {
    const userdata = JSON.parse(localStorage.getItem('user'));
    const userId = userdata[0].userId;
    this.setState({ userId });

    const { classId } = this.props.match.params;
    this.setState({ classId });

    axios.get(`http://127.0.0.1:8000/classAssignment/` + classId)
      .then(res => {
        const assignments = res.data;
        this.setState({ assignments });
        axios.get(`http://127.0.0.1:8000/classroom/` + classId).then(res => {
          this.setState({ classRoomName: res.data[0].className })
        })
      });
  }

  toWorkDetails = (assignmentId) => {
    window.location.replace('/work-details/' + assignmentId)
  }

  render() {
    return (
      <div className="classWorksContainer">
        <Header />
        <div className="outerContainer">
          <div className="classWorkstitleContainer">
            <span className="title">Trabalhos {this.state.classRoomName}</span>
          </div>
          <div className="worksContainer">
            {
              this.state.assignments.map(assignment =>
                assignment.user === this.state.userId ? <div key={assignment.assignmentId} onClick={event => this.toWorkDetails(assignment.assignmentId)} className="workCard"><span className="workTitle">{assignment.title}</span><span className="workClassName">C202 - A (2022/1)</span></div> : <div key={assignment.assignmentId}></div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
