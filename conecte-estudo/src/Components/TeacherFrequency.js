import React, { Component } from "react";
import Header from "./Header";
import "../Styles/TeacherFrequency.css";

export default class TeacherFrequency extends Component {
    render() {
        return (
            <div className="teacherFrequencyContainer">
                <Header />
                <div className="listContainer">
                    <div className="materialTitleContainer">
                        <span className="title">Frequência - C202</span>
                    </div>
                    <table className="list">
                        <thead className="listHeader">
                            <tr className="listHead">
                                <th className="columnName">Frequência</th>
                                <th className="columnName">Aluno</th>
                                <th className="columnName">Data da aula</th>
                            </tr>
                        </thead>
                        <tbody className="listBody">
                            <tr className="materialRow">
                                <th className="materialInfo"><input type={"checkbox"} /></th>
                                <th className="materialInfo">Paulo Rotundaro</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                            <tr className="materialRow">
                                <th className="materialInfo"><input type={"checkbox"} /></th>
                                <th className="materialInfo">Paulo Rotundaro</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                            <tr className="materialRow">
                                <th className="materialInfo"><input type={"checkbox"} /></th>
                                <th className="materialInfo">Paulo Rotundaro</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                            <tr className="materialRow">
                                <th className="materialInfo"><input type={"checkbox"} /></th>
                                <th className="materialInfo">Paulo Rotundaro</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="confirmListButton">Confirmar lista de presença</button>

                </div>
            </div>
        );
    }
}
