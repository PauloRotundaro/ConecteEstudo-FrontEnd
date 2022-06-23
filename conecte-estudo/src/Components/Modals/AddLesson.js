import * as React from 'react';
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

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const changeToDate = event => {
        localStorage.setItem('newEventDate', event.target.value);
    }

    const changeToTime = event => {
        localStorage.setItem('newEventTime', event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        const usersInClass = JSON.parse("[" + localStorage.getItem('usersInClass') + "]");
        console.log(usersInClass);

        let today = new Date();

        usersInClass.forEach(function (user, index) {
            console.log(user, index);

            var data = JSON.stringify({
                "eventType": 2,
                "classId": JSON.parse(localStorage.getItem('class'))[0].classroomId,
                "teacherName": JSON.parse(localStorage.getItem('user'))[0].userName,
                "title": "Aula " + JSON.parse(localStorage.getItem('class'))[0].className,
                "description": "Descrição " + JSON.parse(localStorage.getItem('class'))[0].className,
                "dateOfEvent": localStorage.getItem('newEventDate'),
                "timeOfEvent": localStorage.getItem('newEventTime'),
                "createdAt": today.toISOString().split('T')[0],
                "updatedAt": today.toISOString().split('T')[0],
                "updatedBy": JSON.parse(localStorage.getItem('user'))[0].userId,
                "status": "active",
                "user": user
            });

            var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/userEvent',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

        setOpen(false);
    };

    return (
        <div>
            <button className="classDetailsButton" onClick={handleOpen}>Agendar aula</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <h2 className='modalTitle'>Agendar aula</h2>
                    <div className='addEventModalContainer'>
                        <div className='modalSection'>
                            <span className='modalSectionTitle'>Disciplina</span>
                            <textarea className='modalSectionTextarea' rows={"1"} />
                        </div>
                        <div className='modalSection'>
                            <span className='modalSectionTitle'>Data</span>
                            <input className='modalSectionInput' type={"date"} onChange={changeToDate} />
                        </div>
                        <div className='modalSection'>
                            <span className='modalSectionTitle'>Horário</span>
                            <input className='modalSectionInput' type={"time"} onChange={changeToTime} />
                        </div>
                        <div className='modalButtonContainer'>
                            <button className="cancelAddEventButton" onClick={handleClose}>Cancelar</button>
                            <button className="addEventButton" onClick={handleConfirm} >Adicionar</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}