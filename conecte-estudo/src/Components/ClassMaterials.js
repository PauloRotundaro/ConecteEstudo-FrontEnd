import React, { Component } from "react";
import Header from "./Header";
import "../Styles/ClassMaterials.css";
import AddMaterial from "../Components/Modals/AddMaterial.js";

export default class ClassMaterials extends Component {
    render() {
        return (
            <div className="classMaterialsContainer">
                <Header />
                <div className="listContainer">
                    <div className="materialTitleContainer">
                        <span className="title">Materiais de aula</span>
                        <AddMaterial/>
                    </div>
                    <table className="list">
                        <thead className="listHeader">
                            <tr className="listHead">
                                <th className="columnName">Disciplina</th>
                                <th className="columnName">Título</th>
                                <th className="columnName">Data de postagem</th>
                            </tr>
                        </thead>
                        <tbody className="listBody">
                            <tr className="materialRow">
                                <th className="materialInfo">C202</th>
                                <th className="materialInfo">Primeira lista de Exercícios C202.pdf</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                            <tr className="materialRow">
                                <th className="materialInfo">C202</th>
                                <th className="materialInfo">Primeira lista de Exercícios C202.pdf</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                            <tr className="materialRow">
                                <th className="materialInfo">C202</th>
                                <th className="materialInfo">Primeira lista de Exercícios C202.pdf</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                            <tr className="materialRow">
                                <th className="materialInfo">C202</th>
                                <th className="materialInfo">Primeira lista de Exercícios C202.pdf</th>
                                <th className="materialInfo">07/05/2022</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
