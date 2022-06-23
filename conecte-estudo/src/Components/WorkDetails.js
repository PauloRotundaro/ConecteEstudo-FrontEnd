import React, { Component } from "react";
import Header from "./Header";
import "../Styles/WorkDetails.css";
import axios from "axios";

export default class WorkDetails extends Component {

    state = {
        userId: 0,
        workId: 0,
        workDetails: {},
        dueDate: '',
        dueTime: ''
    }

    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('user'));
        const userId = userdata[0].userId;
        this.setState({ userId });

        const { workId } = this.props.match.params;
        this.setState({ workId });

        axios.get(`http://127.0.0.1:8000/assignment/` + workId)
            .then(res => {
                this.date = res.data[0].dueDate;
                this.dueDate = this.date.split("T")[0];
                this.dueTime = this.date.split("T")[1];
                const dueTime = this.dueTime.split("Z")[0];
                const [day, month, year] = this.dueDate.split('-');
                const dueDate = [year, month, day].join('/');
                this.setState({ workDetails: res.data[0] });
                this.setState({ dueDate });
                this.setState({ dueTime });
            });
    }

    render() {
        return (
            <div className="WorkDetailsContainer">
                <Header />
                <div className="outerContainer">
                    <div className="WorkDetailsTitleContainer">
                        <span className="title">{this.state.workDetails.title}</span>
                    </div>
                    <div className="deadLineContainer">
                        <div className="dueDate">Vence: {this.state.dueDate} às {this.state.dueTime}</div>
                    </div>
                    <div className="descriptionContainer">
                        <div className="descriptionTitle">Descrição</div>
                        <div className="descriptionContent">{this.state.workDetails.description}</div>
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
