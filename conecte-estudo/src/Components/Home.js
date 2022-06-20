import React, { Component } from "react";
// import Modal from 'react-modal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddEvent from '../Components/Modals/AddEvent.js'
import Header from "../Components/Header";
import "../Styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Header />
        <AddEvent/>
        <div className="scheduleContainer">
          <div className="month">Junho</div>
          <div className="day">
            <span>Hoje é Quinta-feira, 2 de junho de 2022</span>
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
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div></th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">9:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">10:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">11:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">12:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">13:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">14:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">15:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">16:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">17:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">18:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">19:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">20:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">21:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">22:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">23:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
              <tr className="weeklyEvents">
                <th className="hour">00:00</th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
                <th className="eventContainer">
                  <div className="eventCard">
                    <span className="eventTitle">Aula C216 - B</span>
                    <span className="eventTime">8:00 - 9:00</span>
                  </div>
                </th>
                <th className="eventContainer"></th>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <AddEvent/> */}

        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}
      </div>
    );
  }
}
