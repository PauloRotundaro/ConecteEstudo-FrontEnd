import React, { Component } from "react";
import Header from "./Header";
import "../Styles/WorkDetails.css";

export default class WorkDetails extends Component {
    render() {
        return (
            <div className="WorkDetailsContainer">
                <Header />
                <div className="outerContainer">
                    <div className="WorkDetailsTitleContainer">
                        <span className="title">Tarefa 1 - Lista de Exercícios</span>
                    </div>
                    <div className="deadLineContainer">
                        <div className="dueDate">Vence: 29/06/2022 às 23h59</div>
                    </div>
                    <div className="descriptionContainer">
                        <div className="descriptionTitle">Descrição</div>
                        <div className="descriptionContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div className="materialContainer">
                        <div className="descriptionTitle">Material de referência</div>
                        <div className="materialDownload">
                            <div className="materialName">Arquivo.pdf</div>
                            <button className="materialDownloadButton">baixar</button>
                        </div>
                    </div>
                    <div className="myJobContainer">
                        <div className="descriptionTitle">Meu trabalho</div>
                        <input type="file" />
                    </div>
                </div>
                <div>
                    <button className="submitWorkButton">Enviar</button>
                </div>
            </div>
        );
    }
}
