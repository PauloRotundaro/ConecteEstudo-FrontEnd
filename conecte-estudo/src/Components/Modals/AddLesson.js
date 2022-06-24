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
        eventHour: '',
        eventDate: '',
        description: '',
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

    titleChange = event => {
        this.setState({ title: event.target.value });
    }

    descriptionChange = event => {
        this.setState({ description: event.target.value });
    }

    eventHourChange = event => {
        this.setState({ eventHour: event.target.value });
    }

    eventDateChange = event => {
        this.setState({ eventDate: event.target.value });
    }

    postEvent = event => {
        event.preventDefault();
        const userdata = JSON.parse(localStorage.getItem('user'));
        const userId = userdata[0].userId;

        const classId = JSON.parse(localStorage.getItem('classId'));

        let today = new Date();
        const date = this.state.eventDate;
        const [day, month, year] = date.split('/');
        const result = [year, month, day].join('');

        const userEvent = {
            eventType: 2,
            classId: classId,
            teacherName: userdata[0].userName,
            title: this.state.title,
            description: this.state.description,
            dateOfEvent: result,
            timeOfEvent: this.state.eventHour,
            createdAt: today.toISOString().split('T')[0],
            updatedAt: today.toISOString().split('T')[0],
            updatedBy: userId,
            status: "active",
            user: userId
        };
        axios.post(`http://127.0.0.1:8000/userEvent`, userEvent)
            .then(event => {
                axios.get(`http://127.0.0.1:8000/classroom/` + classId)
                    .then(res => {
                        const users = res.data[0].user;
                        const className = res.data[0].className;
                        this.setState({ className });
                        users.forEach(element => {
                            const userEvent = {
                                eventType: 2,
                                classId: classId,
                                teacherName: 'null',
                                title: this.state.title,
                                description: this.state.description,
                                dateOfEvent: result,
                                timeOfEvent: this.state.eventHour,
                                createdAt: today.toISOString().split('T')[0],
                                updatedAt: today.toISOString().split('T')[0],
                                updatedBy: userId,
                                status: "active",
                                user: element
                            };
                            axios.post(`http://127.0.0.1:8000/userEvent`, userEvent)
                                .then(event => {
                                })
                        });
                    });
            })

    }

    render() {

        return (
            <div>
                <button className="classDetailsButton" onClick={this.handleOpen}>Agendar aula</button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 800 }}>
                        <h2 className='modalTitle'>Agendar aula</h2>
                        <div className='addEventModalContainer'>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Titulo</span>
                                <textarea name={"title"} className='modalSectionTextarea' onChange={this.titleChange} rows={1} />
                            </div>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Descrição</span>
                                <textarea name={"description"} className='modalSectionInput' rows={4} onChange={this.descriptionChange} />
                            </div>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Data</span>
                                <input name={"dateTime"} className='modalSectionInput' type={"date"} onChange={this.eventDateChange} />
                            </div>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Horário</span>
                                <input name={"dateHour"} className='modalSectionInput' type={"time"} onChange={this.eventHourChange} />
                            </div>
                            <div className='modalButtonContainer'>
                                <button className="cancelAddEventButton" onClick={this.handleClose}>Cancelar</button>
                                <button className="addEventButton" onClick={this.postEvent} >Adicionar</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div >
        );
    }
}