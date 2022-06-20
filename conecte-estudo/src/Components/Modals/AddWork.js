import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "../../Styles/Home.css";

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
    const handleClose = () => {
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
                        <input className='duedate' type={"datetime-local"} />
                        <span className='addWorkSectionTitle'>Descrição</span>
                        <textarea className='addWorkDescription' rows={4} />
                        <span className='addWorkSectionTitle'>Material de referência</span>
                        <input className='addWorkFile' type={"file"} />
                    </div>
                    <div className='modalButtonContainer'>
                        <button className="cancelAddEventButton" onClick={handleClose}>Cancelar</button>
                        <button className="addEventButton">Confirmar</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}