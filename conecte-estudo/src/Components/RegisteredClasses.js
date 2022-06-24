import React, { Component } from "react";
import Header from "./Header";
import "../Styles/RegisteredClasses.css";
import axios from "axios";
export default class RegisteredClasses extends Component {

  state = {
    userId: 0,
    classRooms: [],
    registeredIn: [],
    profileType: '',
    classesTaught: []
  }

  toClassFrequency = (classroomId) => {
    window.location.replace('/frequency/' + classroomId)
  }

  toClassDetails = (classroomId) => {
    window.location.replace('/class-details/' + classroomId)
  }

  componentDidMount() {
    const userdata = JSON.parse(localStorage.getItem('user'));
    const userId = userdata[0].userId;
    const profileType = userdata[0].profileType
    this.setState({ userId });
    this.setState({ profileType });
    axios.get(`http://127.0.0.1:8000/classroom`)
      .then(res => {
        const classRooms = res.data;
        const registeredIn = []
        const classesTaught = []
        this.setState({ classRooms });
        classRooms.forEach(classRoom =>
          classRoom.user.forEach(user =>
            user === this.state.userId ? registeredIn.push(classRoom) : null
          )
        )
        classRooms.forEach(classroom => {
          if(classroom.createdBy === this.state.userId){
            classesTaught.push(classroom);
          }
        })
        this.setState({ registeredIn });
        this.setState({ classesTaught });
      });
  }

  render() {
    let container;
    if (this.state.profileType === 1) {
      container = <div className="outerContainer">
        <div className="titleContainer">
          <span className="title">Turmas ministradas</span>
        </div>
        <div className="classesContainer">
          {
            this.state.classesTaught.map(classroom =>
              <button key={classroom.classroomId} type='button' onClick={event => this.toClassDetails(classroom.classroomId)} className="classCard">
                {classroom.className}
              </button>
            )
          }
        </div>
      </div>
    } else {
      container = <div className="outerContainer">
        <div className="titleContainer">
          <span className="title">Turmas matriculadas</span>
        </div>
        <div className="classesContainer">
          {
            this.state.registeredIn.map(classroom =>
              <button key={classroom.classroomId} type='button' onClick={event => this.toClassFrequency(classroom.classroomId)} className="classCard">
                {classroom.className}
              </button>
            )
          }
        </div>
      </div>
    }

    return (
      <div className="classMaterialsContainer" >
        <Header />
        {container}
      </div>
    );
  }
}
