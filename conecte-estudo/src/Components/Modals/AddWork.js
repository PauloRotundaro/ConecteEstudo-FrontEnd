import { React, Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "../../Styles/Home.css";
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#F6F4FF',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    border: 'none'
};

export default class AddLesson extends Component {
    state = {
        title: '',
        description: '',
        dueDate: '',
        open: false
    }

    setOpen = (value) => {
        this.setState({ open: value });
    }

    handleOpen = () => {
        this.setOpen(true);
    };
    handleClose = () => {
        this.setOpen(false);
    };

    changeTitle = event => {
        this.setState({ title: event.target.value });
    }

    changeDueDate = event => {
        this.setState({ dueDate: event.target.value });
    }

    changeDescription = event => {
        this.setState({ description: event.target.value });
    }

    postEvent = event => {
        event.preventDefault();
        const userdata = JSON.parse(localStorage.getItem('user'));
        const userId = userdata[0].userId;

        const classId = JSON.parse(localStorage.getItem('classId'));

        let today = new Date();

        axios.get(`http://127.0.0.1:8000/classroom/` + classId)
            .then(res => {
                const users = res.data[0].user;
                const className = res.data[0].className;
                this.setState({ className });
                users.forEach(element => {
                    const userEvent = {
                        identifier: 2,
                        title: this.state.title,
                        classId: classId,
                        createdAt: today.toISOString().split('T')[0],
                        updatedAt: today.toISOString().split('T')[0],
                        createdBy: userId,
                        updatedBy: userId,
                        description: this.state.description,
                        deliveredAt: '2022-07-13',
                        dueDate: this.state.dueDate.split('T')[0],
                        deliveredMaterial: 'string',
                        score: 0.1,
                        attachment: "active",
                        user: element
                    };
                    console.log(userEvent)
                    axios.post(`http://127.0.0.1:8000/assignment`, userEvent)
                        .then(event => {
                            console.log(event)
                        })
                });
                this.handleClose(true);
            });

    };
    render() {
        return (
            <div>
                <button className="classDetailsButton" onClick={this.handleOpen}>Atribuir atividade</button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 800 }}>
                        <h2 className='modalTitle'>Atribuir atividade</h2>
                        <div className='addWorkModalContainer'>
                            <span className='addWorkSectionTitle'>Título</span>
                            <input name='title' className='addWorkDescription' type={"text"} onChange={this.changeTitle} />
                            <span className='addWorkSectionTitle'>Vencimento:</span>
                            <input name='dueDate' className='duedate' type={"datetime-local"} onChange={this.changeDueDate} />
                            <span className='addWorkSectionTitle'>Descrição</span>
                            <textarea name='description' className='addWorkDescription' rows={4} onChange={this.changeDescription} />
                            <span className='addWorkSectionTitle'>Material de referência</span>
                            <input name='attachment' className='addWorkFile' type={"file"} />
                        </div>
                        <div className='modalButtonContainer'>
                            <button className="cancelAddEventButton" onClick={this.handleClose}>Cancelar</button>
                            <button className="addEventButton" onClick={this.postEvent}>Confirmar</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        );
    }
}