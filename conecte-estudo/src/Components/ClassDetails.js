import React, { Component } from "react";
import Header from "./Header";
import "../Styles/ClassDetails.css";
import AddLesson from "../Components/Modals/AddLesson.js";
import AddWork from "../Components/Modals/AddWork.js";
import axios from "axios";

export default class ClassDetails extends Component {

    state = {
        userId: 0,
        classId: 0,
        classDetails: {},
        classMembers: 0
    }

    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('user'));
        const userId = userdata[0].userId;
        this.setState({ userId });

        const { classId } = this.props.match.params;
        localStorage.setItem('classId', classId);
        this.setState({ classId });

        axios.get(`http://127.0.0.1:8000/classroom/` + classId)
            .then(res => {
                const classDetails = res.data[0];
                const classMembers = Object.keys(classDetails.user).length;
                this.setState({ classDetails });
                this.setState({ classMembers });
            });
    }

    toTeachingPlan = (classId) => {
        window.location.replace('/teaching-plan/' + classId)
    }

    toTeacherFrequency = () => {
        window.location.replace('/class-frequency/' + this.state.classId)
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
                            <div className="classMembers">{this.state.classMembers}</div>
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Turma: </span>
                            <div className="className">{this.state.classDetails.className}</div>
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Frequência: </span>
                            <button onClick={this.toTeacherFrequency} className="classDetailsButton">Atribuir frequência</button>
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Agendar aula: </span>
                            <AddLesson />
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Atribuir atividade: </span>
                            <AddWork />
                        </div>
                        <div className="detailItem">
                            <span className="detailItemTitle">Plano de ensino: </span>
                            <button onClick={event => this.toTeachingPlan(this.state.classId)} className="classDetailsButton">Ver plano</button>
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