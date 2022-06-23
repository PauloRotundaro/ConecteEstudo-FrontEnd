import React, { Component } from "react";
import Header from "./Header";
import "../Styles/RegisteredClasses.css";
import axios from "axios";
export default class RegisteredClasses extends Component {

  state = {
    userId: 0,
    classRooms: [],
    registeredIn: []
  }

  toClassFrequency = (classroom) => {
    window.location.replace('/frequency/' + classroom)
  }

  componentDidMount() {
    const userdata = JSON.parse(localStorage.getItem('user'));
    const userId = userdata[0].userId;
    this.setState({ userId });
    axios.get(`http://127.0.0.1:8000/classroom`)
      .then(res => {
        const classRooms = res.data;
        const registeredIn = []
        this.setState({ classRooms });
        classRooms.forEach(classRoom =>
          classRoom.user.forEach(user =>
            user === this.state.userId ? registeredIn.push(classRoom.classroomId) : null
          )
        )
        this.setState({ registeredIn });
      });
  }

  render() {
    return (
      <div className="classMaterialsContainer" >
        <Header />
        <div className="outerContainer">
          <div className="titleContainer">
            <span className="title">Turmas matriculadas</span>
          </div>
          <div className="classesContainer">
            {
              this.state.registeredIn.map(classroom =>
                <button key={classroom} type='button' onClick={event => this.toClassFrequency(classroom)} className="classCard">
                  {classroom}
                </button>
              )
            }
          </div>
        </div>
        {/* <div className="outerContainer">
          <div className="titleContainer">
            <span className="title">Turmas ministradas</span>
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
        </div> */}
      </div>
    );
  }
}
