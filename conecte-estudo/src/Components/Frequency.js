import React, { Component } from "react";
import Header from "./Header";
import "../Styles/Frequency.css";
import axios from "axios";

export default class RegisteredClasses extends Component {

    state = {
        userId: 0,
        classId: 0,
        userAbsences: {},
        classRoomName: '',
        total: 0,
        janeiro: 0,
        fevereiro: 0,
        março: 0,
        abril: 0,
        maio: 0,
        junho: 0,
        julho: 0,
        agosto: 0,
        setembro: 0,
        outubro: 0,
        novembro: 0,
        dezembro: 0
    }

    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('user'));
        const userId = userdata[0].userId;
        let total = 0;
        let janeiro = 0;
        let fevereiro = 0;
        let março = 0;
        let abril = 0;
        let maio = 0;
        let junho = 0;
        let julho = 0;
        let agosto = 0;
        let setembro = 0;
        let outubro = 0;
        let novembro = 0;
        let dezembro = 0;

        this.setState({ userId });

        const { classId } = this.props.match.params;
        this.setState({ classId });

        axios.get(`http://127.0.0.1:8000/userAbsence/` + userId)
            .then(res => {
                const userAbsences = res.data;
                console.log();
                axios.get(`http://127.0.0.1:8000/classroom/` + classId).then(res => {
                    this.setState({ classRoomName: res.data[0].className })
                })
                userAbsences.forEach(absence => {
                    total += absence.count;
                    let date = new Date(absence.date);
                    switch (date.getMonth()) {
                        case 0:
                            janeiro += absence.count;
                            break;

                        case 1:
                            fevereiro += absence.count;
                            break;

                        case 2:
                            março += absence.count;
                            break;

                        case 3:
                            abril += absence.count;
                            break;

                        case 4:
                            maio += absence.count;
                            break;

                        case 5:
                            junho += absence.count;
                            break;

                        case 6:
                            julho += absence.count;
                            break;

                        case 7:
                            agosto += absence.count;
                            break;

                        case 8:
                            setembro += absence.count;
                            break;

                        case 9:
                            outubro += absence.count;
                            break;

                        case 10:
                            novembro += absence.count;
                            break;

                        case 11:
                            dezembro += absence.count;
                            break;

                        default:
                            break;
                    }
                });
                this.setState({ total });
                this.setState({ janeiro });
                this.setState({ fevereiro });
                this.setState({ março });
                this.setState({ abril });
                this.setState({ maio });
                this.setState({ junho });
                this.setState({ julho });
                this.setState({ agosto });
                this.setState({ setembro });
                this.setState({ outubro });
                this.setState({ novembro });
                this.setState({ dezembro });
            });
    }

    toClassWorks = () => {
        window.location.replace('/classworks/' + this.state.classId)
    }

    toTeachingPlan = () => {
        window.location.replace('/teaching-plan/' + this.state.classId)
    }

    render() {
        return (
            <div className="frequencyContainer">
                <Header />
                <div className="outerContainer">
                    <div className="titleContainer">
                        <span className="title">Frequência - {this.state.classRoomName}</span>
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
                                    <td className="frequencyTableBodyColumn br-8px-br">{this.state.janeiro}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.fevereiro}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.março}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.abril}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.maio}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.junho}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.julho}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.agosto}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.setembro}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.outubro}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.novembro}</td>
                                    <td className="frequencyTableBodyColumn">{this.state.dezembro}</td>
                                    <td className="frequencyTableBodyColumn">10</td>
                                    <td className="frequencyTableBodyColumn br-8px-bl">{this.state.total}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="classWorkButtonContainer">
                            <button onClick={this.toClassWorks} className="goToClassWorkButton">Ir para atividades da disciplina</button>
                            <button onClick={this.toTeachingPlan} className="goToClassWorkButton">Ver plano de ensino</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
