import React, { Component } from "react";
import Header from "./Header";
import axios from 'axios';
import "../Styles/TeachingPlan.css";

export default class TeachingPlan extends Component {
    state = {
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
        references: "references",
        loggedUser: {},
        teachingPlan: {},
        classRoomName: ''
    }

    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('user'));
        const loggedUser = userdata[0];

        this.setState({ loggedUser });

        const { classId } = this.props.match.params;
        this.setState({ classId })

        axios.get(`http://127.0.0.1:8000/classTeachingPlan/` + classId)
            .then(res => {
                const teachingPlan = res.data[0];
                this.setState({ teachingPlan });
                this.setState({teacherName: teachingPlan.teacherName})
                axios.get(`http://127.0.0.1:8000/classroom/` + classId).then(res => {
                    this.setState({ classRoomName: res.data[0].className })
                })
            })
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
        const teachingPlan = {
            classId: this.state.classId,
            title: this.state.title,
            state: this.state.state,
            workload: this.state.workload,
            absencesLimit: this.state.absencesLimit,
            year: this.state.year,
            teacherName: this.state.loggedUser.userName,
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
                localStorage.setItem('teachingPlan', JSON.stringify(res.data));
            })
    }

    returnToClassDetails = () => {
        window.location.replace('/class-details/' + this.state.classId);
    }

    goToFrequency = () => {
        window.location.replace('/frequency/' + this.state.classId);
    }

    render() {
        let container;

        if (this.state.loggedUser.profileType === 1) {
            container = <div className="teachingPlanFormContainer">
                <div className="teacherNameContainer">
                    <span className="teacherName">Professor {this.state.loggedUser.userName} - {this.state.loggedUser.email}</span>
                </div>
                <div className="teachingPlan">
                    <div className="teachingPlanHeaderContainer">
                        <div className="headerItem">
                            <span className="headerItemTitle">Disciplina: </span>
                            <input className="headerItemInput" type={"text"} defaultValue={this.state.classRoomName} onChange={this.changeToClass} />
                        </div>
                        <div className="headerItem">
                            <span className="headerItemTitle">Ano/semestre: </span>
                            <input className="headerItemInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.year : ''} type={"text"} onChange={this.changeToYear} />
                        </div>
                        <div className="headerItem">
                            <span className="headerItemTitle">Carga horária total: </span>
                            <input className="headerItemInput arrowDelete" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.workload : ''} type={"number"} onChange={this.changeToWorkload} /> h
                        </div>
                    </div>
                    <div className="teachingPlanForm">
                        <div className="formSection">
                            <div className="sectionTitle">Título</div>
                            <textarea rows={3} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.title : ''} type={"text"} onChange={this.changeToTitle} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Conteúdo Programático</div>
                            <textarea rows={12} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.content : ''} type={"text"} onChange={this.changeToContent} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Objetivos Gerais</div>
                            <textarea rows={12} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.objective : ''} type={"text"} onChange={this.changeToObjective} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Procedimentos de Ensino</div>
                            <textarea rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.teachingProcedure : ''} type={"text"} onChange={this.changeToTeachingProcedure} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Recursos didáticos</div>
                            <textarea rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.didacticResource : ''} type={"text"} onChange={this.changeToDidacticResource} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Instrumentos e Procedimentos de Avaliação</div>
                            <textarea rows={12} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.evaluationProcedure : ''} type={"text"} onChange={this.changeToEvaluationProcedure} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Critérios de Aprovação</div>
                            <textarea rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.approvalCriteria : ''} type={"text"} onChange={this.changeToApprovalCriteria} />
                        </div>
                        <div className="formSection mb-15">
                            <div className="sectionTitle">Referências Bibliográficas</div>
                            <textarea rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.references : ''} type={"text"} onChange={this.changeToReferences} />
                        </div>
                    </div>
                </div>
                <div className="teachingPlanButtonContainer">
                    <button onClick={this.returnToClassDetails} className="cancelFormButton">Voltar</button>
                    <button onClick={this.saveTeachingPlan} className="submitFormButton">Salvar alterações</button>
                </div>
            </div>
        } else {
            container = <div className="teachingPlanFormContainer">
                <div className="teacherNameContainer">
                    <span className="teacherName">Professor {this.state.teacherName}</span>
                </div>
                <div className="teachingPlan">
                    <div className="teachingPlanHeaderContainer">
                        <div className="headerItem">
                            <span className="headerItemTitle">Disciplina: </span>
                            <input readOnly className="headerItemInput" type={"text"} defaultValue={this.state.classRoomName} onChange={this.changeToClass} />
                        </div>
                        <div className="headerItem">
                            <span className="headerItemTitle">Ano/semestre: </span>
                            <input readOnly className="headerItemInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.year : ''} type={"text"} onChange={this.changeToYear} />
                        </div>
                        <div className="headerItem">
                            <span className="headerItemTitle">Carga horária total: </span>
                            <input readOnly className="headerItemInput arrowDelete" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.workload : ''} type={"number"} onChange={this.changeToWorkload} /> h
                        </div>
                    </div>
                    <div className="teachingPlanForm">
                        <div className="formSection">
                            <div className="sectionTitle">Título</div>
                            <textarea readOnly rows={3} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.title : ''} type={"text"} onChange={this.changeToTitle} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Conteúdo Programático</div>
                            <textarea readOnly rows={12} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.content : ''} type={"text"} onChange={this.changeToContent} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Objetivos Gerais</div>
                            <textarea readOnly rows={12} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.objective : ''} type={"text"} onChange={this.changeToObjective} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Procedimentos de Ensino</div>
                            <textarea readOnly rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.teachingProcedure : ''} type={"text"} onChange={this.changeToTeachingProcedure} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Recursos didáticos</div>
                            <textarea readOnly rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.didacticResource : ''} type={"text"} onChange={this.changeToDidacticResource} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Instrumentos e Procedimentos de Avaliação</div>
                            <textarea readOnly rows={12} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.evaluationProcedure : ''} type={"text"} onChange={this.changeToEvaluationProcedure} />
                        </div>
                        <div className="formSection">
                            <div className="sectionTitle">Critérios de Aprovação</div>
                            <textarea readOnly rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.approvalCriteria : ''} type={"text"} onChange={this.changeToApprovalCriteria} />
                        </div>
                        <div className="formSection mb-15">
                            <div className="sectionTitle">Referências Bibliográficas</div>
                            <textarea readOnly rows={5} className="sectionInput" defaultValue={this.state.teachingPlan != null ? this.state.teachingPlan.references : ''} type={"text"} onChange={this.changeToReferences} />
                        </div>
                    </div>
                </div>
                <div className="teachingPlanButtonContainer">
                    <button onClick={this.goToFrequency} className="cancelFormButton">Voltar</button>
                </div>
            </div>
        }

        return (
            <div className="teachingPlanContainer">
                <Header />
                <div className="outerContainer">
                    <div className="teachingPlanTitleContainer">
                        <span className="title">Plano de Ensino</span>
                    </div>
                    {container}
                </div>
            </div>
        );
    }
}
