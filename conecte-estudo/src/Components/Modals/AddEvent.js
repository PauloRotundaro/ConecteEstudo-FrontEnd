import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "../../Styles/Home.css";
import { React, Component } from 'react';
import axios from 'axios';

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

export class AddEvent extends Component {
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
    let today = new Date();
    const date = this.state.eventDate;
    const [day, month, year] = date.split('/');
    const result = [year, month, day].join('');

    const userEvent = {
      eventType: 1,
      classId: 0,
      teacherName: 'null',
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
      .then(res => {
        window.location.replace("/");
      })
  }

  render() {
    return (
      <div>
        <div className="buttonContainer">
          <button className="addEventButton" onClick={this.handleOpen}>Adicionar um evento</button>
        </div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 800 }}>
            <h2 className='modalTitle'>Adicionar um evento</h2>
            <form onSubmit={this.postEvent} className='addEventModalContainer'>
              <div className='modalSection'>
                <span className='modalSectionTitle'>Título do evento</span>
                <textarea name='title' className='modalSectionTextarea' onChange={this.titleChange} rows={"1"} />
              </div>
              <div className='modalSection'>
                <span className='modalSectionTitle'>Descrição</span>
                <textarea name='description' className='modalSectionTextarea' onChange={this.descriptionChange} rows={"1"} />
              </div>
              <div className='modalSection'>
                <span className='modalSectionTitle'>Horário do evento</span>
                <input name="eventHour" className='modalSectionInput' onChange={this.eventHourChange} type={'time'} />
              </div>
              <div className='modalSection'>
                <span className='modalSectionTitle'>Data do evento</span>
                <input className='modalSectionInput' name="eventDate" onChange={this.eventDateChange} type={'date'} />
              </div>
              <div className='modalButtonContainer'>
                <button className="cancelAddEventButton" onClick={this.handleClose}>Cancelar</button>
                <button className="addEventButton" type="postEvent">Adicionar</button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    );
  }
}
