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
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  border: 'none'
};

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Open Child Modal</Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

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
      <div className="buttonContainer">
        <button className="addEventButton" onClick={handleOpen}>Adicionar um evento</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <h2 className='modalTitle'>Adicionar um evento</h2>
          <div className='addEventModalContainer'>
            <div className='modalSection'>
              <span className='modalSectionTitle'>Título do evento</span>
              <textarea className='modalSectionTextarea' rows={"1"}/>
            </div>
            <div className='modalSection'>
              <span className='modalSectionTitle'>Horário do evento</span>
              <input className='modalSectionInput' type={'time'}/>
            </div>
            <div className='modalSection'>
              <span className='modalSectionTitle'>Data do evento</span>
              <input className='modalSectionInput' type={'date'}/>
            </div>
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
