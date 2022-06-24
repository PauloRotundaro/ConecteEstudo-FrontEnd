import React, { Component } from "react";
import { AddEvent } from '../Components/Modals/AddEvent.js'
import Header from "../Components/Header";
import "../Styles/Home.css";
import axios from 'axios';

export default class Home extends Component {

  state = {
    events: [],
    day: '',
    dateString: '',
    month: '',
    title: '',
    description: '',
    dateOfEvent: ''
  }

  componentDidMount() {
    var newDate = new Date();
    var today = newDate.getDay();
    var dayNumber = newDate.getDate();
    var month = newDate.getMonth();
    const userdata = JSON.parse(localStorage.getItem('user'));
    const userId = userdata[0].userId;

    if (today === 0) today = "Domingo"
    else if (today === 1) today = "Segunda-feira"
    else if (today === 2) today = "Terça-feira"
    else if (today === 3) today = "Quarta-feira"
    else if (today === 4) today = "Quinta-feira"
    else if (today === 5) today = "Sexta-feira"
    else today = "Sábado"

    if (month === 0) month = "Janeiro"
    else if (month === 1) month = "Fevereiro"
    else if (month === 2) month = "Março"
    else if (month === 3) month = "Abril"
    else if (month === 4) month = "Maio"
    else if (month === 5) month = "Junho"
    else if (month === 6) month = "Julho"
    else if (month === 7) month = "Agosto"
    else if (month === 8) month = "Setembro"
    else if (month === 9) month = "Outubro"
    else if (month === 10) month = "Novembro"
    else month = "Dezembro"

    this.setState({ dateString: dayNumber + ' de ' + month + ' de ' + 2022 })
    this.setState({ day: today });
    this.setState({ month });

    axios.get(`http://127.0.0.1:8000/userEvent/` + userId)
      .then(res => {
        const events = res.data;
        this.setState({ events });
      })
  }

  render() {
    return (
      <div className="homeContainer">
        <Header />
        <AddEvent />
        <div className="scheduleContainer">
          <div className="month">{this.state.month}</div>
          <div className="day">
            <span>Hoje é {this.state.day}, {this.state.dateString}</span>
          </div>
          <table className="schedule">
            <thead className="scheduleHeader">
              <tr className="scheduleWeek">
                <th className="scheduleDay width4"></th>
                <th className="scheduleDay width16">SEGUNDA-FEIRA</th>
                <th className="scheduleDay width16">TERÇA-FEIRA</th>
                <th className="scheduleDay width16">QUARTA-FEIRA</th>
                <th className="scheduleDay width16">QUINTA-FEIRA</th>
                <th className="scheduleDay width16">SEXTA-FEIRA</th>
                <th className="scheduleDay width16">SÁBADO</th>
              </tr>
            </thead>
            <tbody className="scheduleBody">
              <tr className="weeklyEvents">
                <th className="hour">8:00</th>
                {
                  this.state.events.map(event =>
                    <th key={event.eventId} className="eventContainer">
                      <div className="eventCard">
                        <span className="eventTitle">{event.title}</span>
                        <span className="eventTime">{event.description}</span>
                        <span className="eventTime">{event.teacherName === "null" ? '' : 'Professor ' + event.teacherName}</span>
                      </div>
                    </th>
                  )
                }
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">9:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">10:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula de inglês</span>
                    <span className="eventTime">Módulo XIII</span>
                    <span className="eventTime"></span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">11:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">12:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">13:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula de violão</span>
                    <span className="eventTime">Primeira aula (levar violão)</span>
                    <span className="eventTime"></span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">14:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">15:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">16:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">17:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">18:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">19:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">20:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">21:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">22:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">23:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">00:00</th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
