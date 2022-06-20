import React, { Component } from "react";
import Header from "./Header";
import "../Styles/Frequency.css";

export default class RegisteredClasses extends Component {
    render() {
        return (
            <div className="frequencyContainer">
                <Header />
                <div className="outerContainer">
                    <div className="titleContainer">
                        <span className="title">Frequência - C202</span>
                    </div>
                    <div className="tableContainer w-80">
                        <table className="frequencyTable w-100">
                            <thead className="frequencyTableHead">
                                <tr className="frequencyTableHeader">
                                    <th className="frequencyTableHeaderColumn br-8px-tr">Janeiro</th>
                                    <th className="frequencyTableHeaderColumn">Fevereiro</th>
                                    <th className="frequencyTableHeaderColumn">Março</th>
                                    <th className="frequencyTableHeaderColumn">Abril</th>
                                    <th className="frequencyTableHeaderColumn">Maio</th>
                                    <th className="frequencyTableHeaderColumn">Junho</th>
                                    <th className="frequencyTableHeaderColumn">Julho</th>
                                    <th className="frequencyTableHeaderColumn">Agosto</th>
                                    <th className="frequencyTableHeaderColumn">Setembro</th>
                                    <th className="frequencyTableHeaderColumn">Outubro</th>
                                    <th className="frequencyTableHeaderColumn">Novembro</th>
                                    <th className="frequencyTableHeaderColumn">Dezembro</th>
                                    <th className="frequencyTableHeaderColumn">Limite prévio</th>
                                    <th className="frequencyTableHeaderColumn br-8px-tl">Total</th>
                                </tr>
                            </thead>
                            <tbody className="frequencyTableBodyContainer">
                                <tr className="frequencyTableBody">
                                    <td className="frequencyTableBodyColumn br-8px-br">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">0</td>
                                    <td className="frequencyTableBodyColumn">10</td>
                                    <td className="frequencyTableBodyColumn br-8px-bl">0</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="classWorkButtonContainer">
                            <a href={`/classworks`} className="goToClassWorkButton">Ir para atividades da disciplina</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
