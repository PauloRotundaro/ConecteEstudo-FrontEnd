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
            <button className="addMaterialButton" onClick={handleOpen}>Adicionar material</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <h2 className='modalTitle'>Adicionar material</h2>
                    <div className='addEventModalContainer'>
                        <input className='addWorkFile' type={"file"} />
                        <div className='modalButtonContainer'>
                            <button className="cancelAddEventButton" onClick={handleClose}>Cancelar</button>
                            <button className="addEventButton">Adicionar</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}