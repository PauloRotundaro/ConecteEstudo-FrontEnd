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
        localStorage.setItem('assigmentDueDate', event.target.value);
    }

    const changeToDescription = event => {
        localStorage.setItem('assigmentDescription', event.target.value);
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
                "identifier": 1,
                "title": "Tarefa " + JSON.parse(localStorage.getItem('class'))[0].className,
                "description": localStorage.getItem('assigmentDescription'),
                "classId": JSON.parse(localStorage.getItem('class'))[0].classroomId,
                "createdAt": today.toISOString().split('T')[0],
                "updatedAt": today.toISOString().split('T')[0],
                "createdBy": JSON.parse(localStorage.getItem('user'))[0].userId,
                "updatedBy": JSON.parse(localStorage.getItem('user'))[0].userId,
                "dueDate": localStorage.getItem('assigmentDueDate'),
                "deliveredAt": today.toISOString().split('T')[0],
                "deliveredMaterial": "deliveredMaterial",
                "score": 0,
                "attachment": "attachment",
                "user": user
            });

            var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/assignment',
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
            <button className="classDetailsButton" onClick={handleOpen}>Atribuir atividade</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <h2 className='modalTitle'>Atribuir atividade</h2>
                    <div className='addWorkModalContainer'>
                        <span className='addWorkSectionTitle'>Vencimento:</span>
                        <input className='duedate' type={"datetime-local"} onChange={changeToDate} />
                        <span className='addWorkSectionTitle'>Descrição</span>
                        <textarea className='addWorkDescription' rows={4} onChange={changeToDescription} />
                        <span className='addWorkSectionTitle'>Material de referência</span>
                        <input className='addWorkFile' type={"file"} />
                    </div>
                    <div className='modalButtonContainer'>
                        <button className="cancelAddEventButton" onClick={handleClose}>Cancelar</button>
                        <button className="addEventButton" onClick={handleConfirm}>Confirmar</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}