import React, { Component } from "react";
import Header from "./Header";
import "../Styles/ClassDetails.css";
import AddLesson from "../Components/Modals/AddLesson.js";
import AddWork from "../Components/Modals/AddWork.js";
import axios from 'axios';

export default class ClassDetails extends Component {
    componentDidMount() {
        const pathname = window.location.pathname;
        const windowClassId = pathname.split('/')[2];

        const classId = windowClassId;

        axios.get(`http://127.0.0.1:8000/classroom/` + classId)
            .then(res => {
                localStorage.setItem('class', JSON.stringify(res.data));
            })

        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/userClassroom/' + classId,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                const usersInClass = response.data[0].user
                console.log(usersInClass)

                localStorage.setItem('usersInClass', usersInClass)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="classDetailsContainer">
                <Header />
                <div className="classDetailsOuterContainer">
                    <div className="detailsContainer">
                        <span className="title mg-20">Detalhes da turma</span>
                        <div className="detailItem">
                            <span className="detailItemTitle">Membros da equipe: </span>
                            <div className="classMembers">64</div>
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Turma: </span>
                            <div className="className">C202 - A</div>
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Frequência: </span>
                            <a href="/class-frequency" className="classDetailsButton">Atribuir frequência</a>
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Agendar aula: </span>
                            <AddLesson />
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Atribuir atividade: </span>
                            <AddWork />
                        </div>
                    </div>
                </div>
                <div className="mt-30">
                    <a href="/registered-classes" className="backToClass">Voltar</a>
                </div>
            </div>
        );
    }
}