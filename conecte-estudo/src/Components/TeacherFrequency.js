import React, { Component } from "react";
import Header from "./Header";
import "../Styles/TeacherFrequency.css";
import axios from "axios";

export default class TeacherFrequency extends Component {
    state = {
        students: [],
        userId: 0,
        classId: 0,
        className: '',
        date: ''
    }

    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('user'));
        const userId = userdata[0].userId;
        this.setState({ userId });

        const { classId } = this.props.match.params;
        this.setState({ classId });
        localStorage.setItem('classId', classId);

        let studentsList = [];
        let users = []

        axios.get(`http://127.0.0.1:8000/classroom/` + classId)
            .then(res => {
                users = res.data[0].user;
                const className = res.data[0].className;
                this.setState({ className });
                users.forEach(element => {
                    axios.get(`http://127.0.0.1:8000/user/` + element).then(userInfo =>
                        studentsList.push(userInfo.data[0])
                    )
                });
            });
            studentsList = Object.entries(studentsList);
            this.setState({ students: studentsList });
    }


    render() {
        return (
            <div className="teacherFrequencyContainer">
                <Header />
                <div className="listContainer">
                    <div className="materialTitleContainer">
                        <span className="title">Frequência - {this.state.className}</span>
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
                            {
                                this.state.students.map(student =>
                                    <tr key={student.userId} className="materialRow">
                                        <th className="materialInfo"><input type={"checkbox"} className="check" /></th>
                                        <th className="materialInfo">{student.userName}</th>
                                        <th className="materialInfo">{this.state.date}</th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="confirmListButton">Confirmar lista de presença</button>
                </div>
            </div>
        );
    }
}
