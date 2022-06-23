import React, { Component } from "react";
import Header from "./Header";
import axios from 'axios';
import "../Styles/TeachingPlan.css";

export default class TeachingPlan extends Component {
    state = {
        class: "class",
        classId: 2,
        title: "title",
        state: 1,
        workload: 40,
        absencesLimit: 10,
        year: "2022",
        teacherName: "teacherName",
        content: "content",
        objective: "objective",
        teachingProcedure: "teachingProcedure",
        didacticResource: "didacticResource",
        evaluationProcedure: "evaluationProcedure",
        approvalCriteria: "approvalCriteria",
        references: "references"
    }

    changeToClass = event => {
        this.setState({ class: event.target.value });
    }

    changeToYear = event => {
        this.setState({ year: event.target.value });
    }

    changeToWorkload = event => {
        this.setState({ workload: event.target.value });
    }

    changeToTitle = event => {
        this.setState({ title: event.target.value });
    }

    changeToContent = event => {
        this.setState({ content: event.target.value });
    }

    changeToObjective = event => {
        this.setState({ objective: event.target.value });
    }

    changeToTeachingProcedure = event => {
        this.setState({ teachingProcedure: event.target.value });
    }

    changeToDidacticResource = event => {
        this.setState({ didacticResource: event.target.value });
    }

    changeToEvaluationProcedure = event => {
        this.setState({ evaluationProcedure: event.target.value });
    }

    changeToApprovalCriteria = event => {
        this.setState({ approvalCriteria: event.target.value });
    }

    changeToReferences = event => {
        this.setState({ references: event.target.value });
    }

    saveTeachingPlan = () => {
        console.log("APERTOU BOTAO");

        const teachingPlan = {
            class: "class",
            classId: this.state.classId,
            title: this.state.title,
            state: this.state.state,
            workload: this.state.workload,
            absencesLimit: this.state.absencesLimit,
            year: this.state.year,
            teacherName: this.state.teacherName,
            content: this.state.content,
            objective: this.state.objective,
            teachingProcedure: this.state.teachingProcedure,
            didacticResource: this.state.didacticResource,
            evaluationProcedure: this.state.evaluationProcedure,
            approvalCriteria: this.state.approvalCriteria,
            references: this.state.references
        };

        axios.post(`http://127.0.0.1:8000/teachingPlan`, teachingPlan)
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem('teachingPlan', JSON.stringify(res.data));
            })
    }

    render() {
        return (
            <div className="teachingPlanContainer">
                <Header />
                <div className="outerContainer">
                    <div className="teachingPlanTitleContainer">
                        <span className="title">Plano de Ensino</span>
                    </div>
                    <div className="teachingPlanFormContainer">
                        <div className="teacherNameContainer">
                            <span className="teacherName">Professor Marcelo Cysneiros - marcelovca90@inatel.br</span>
                        </div>
                        <div className="teachingPlan">
                            <div className="teachingPlanHeaderContainer">
                                <div className="headerItem">
                                    <span className="headerItemTitle">Disciplina: </span>
                                    <input className="headerItemInput" type={"text"} onChange={this.changeToClass} />
                                </div>
                                <div className="headerItem">
                                    <span className="headerItemTitle">Ano/semestre: </span>
                                    <input className="headerItemInput" type={"text"} onChange={this.changeToYear} />
                                </div>
                                <div className="headerItem">
                                    <span className="headerItemTitle">Carga horária total: </span>
                                    <input className="headerItemInput arrowDelete" type={"number"} onChange={this.changeToWorkload} /> h
                                </div>
                            </div>
                            <div className="teachingPlanForm">
                                <div className="formSection">
                                    <div className="sectionTitle">Título</div>
                                    <textarea rows={3} className="sectionInput" type={"text"} onChange={this.changeToTitle} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Conteúdo Programático</div>
                                    <textarea rows={12} className="sectionInput" type={"text"} onChange={this.changeToContent} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Objetivos Gerais</div>
                                    <textarea rows={12} className="sectionInput" type={"text"} onChange={this.changeToObjective} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Procedimentos de Ensino</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} onChange={this.changeToTeachingProcedure} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Recursos didáticos</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} onChange={this.changeToDidacticResource} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Instrumentos e Procedimentos de Avaliação</div>
                                    <textarea rows={12} className="sectionInput" type={"text"} onChange={this.changeToEvaluationProcedure} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Critérios de Aprovação</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} onChange={this.changeToApprovalCriteria} />
                                </div>
                                <div className="formSection mb-15">
                                    <div className="sectionTitle">Referências Bibliográficas</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} onChange={this.changeToReferences} />
                                </div>
                                <div className="formSection mb-15">
                                    <span className="partValue">Peso parte teórica (%): </span>
                                    <input type={"number"} className="partValueInput arrowDelete"></input> %
                                </div>
                                <div className="formSection mb-15">
                                    <span className="partValue">Peso parte prática (%): </span>
                                    <input type={"number"} className="partValueInput arrowDelete"></input> %
                                </div>
                            </div>
                        </div>
                        <div className="teachingPlanButtonContainer">
                            <button className="cancelFormButton">Cancelar</button>
                            <button onClick={this.saveTeachingPlan} className="submitFormButton">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
