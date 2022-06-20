import React, { Component } from "react";
import Header from "./Header";
import "../Styles/TeachingPlan.css";

export default class TeachingPlan extends Component {
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
                                    <input className="headerItemInput" type={"text"} />
                                </div>
                                <div className="headerItem">
                                    <span className="headerItemTitle">Ano/semestre: </span>
                                    <input className="headerItemInput" type={"text"} />
                                </div>
                                <div className="headerItem">
                                    <span className="headerItemTitle">Carga horária total: </span>
                                    <input className="headerItemInput arrowDelete" type={"number"} /> h
                                </div>
                            </div>
                            <div className="teachingPlanForm">
                                <div className="formSection">
                                    <div className="sectionTitle">Ementa</div>
                                    <textarea rows={3} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Conteúdo Programático</div>
                                    <textarea rows={12} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Objetivos Gerais</div>
                                    <textarea rows={12} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Procedimentos de Ensino</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Recursos didátivos</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Instumentos e Procedimentos de Avaliação</div>
                                    <textarea rows={12} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection">
                                    <div className="sectionTitle">Critérios de Aprovação</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} />
                                </div>
                                <div className="formSection mb-15">
                                    <div className="sectionTitle">Referências Bibliográficas</div>
                                    <textarea rows={5} className="sectionInput" type={"text"} />
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
                            <button className="submitFormButton">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
