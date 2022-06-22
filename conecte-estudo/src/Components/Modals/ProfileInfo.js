import { React, Component } from 'react';
import axios from 'axios';
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

export default class ProfileInfo extends Component {
    state = {
        user: '',
        userName: '',
        email: '',
        birthdate: '',
        phone: '',
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

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/user/40`)
            .then(res => {
                const user = res.data[0];
                const birthdate = user.birthdate.substring(0, 10);
                const [year, month, day] = birthdate.split('/');
                const result = [day, month, year].join('');
                this.setState({ user });
                this.setState({ userName: user.userName });
                this.setState({ email: user.email });
                this.setState({ birthdate: result });
                this.setState({ phone: user.phone });
            })
    }

    userNameChange = event => {
        this.setState({ userName: event.target.value });
    }

    emailChange = event => {
        this.setState({ email: event.target.value });
    }

    birthdateChange = event => {
        this.setState({ email: event.target.value });
    }

    phoneChange = event => {
        this.setState({ phone: event.target.value });
    }

    editProfileInfo = event => {
        event.preventDefault();

        let today = new Date();

        const user = {
            userId: 40,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.user.password,
            profileType: this.state.user.profileType,
            phone: this.state.phone,
            birthdate: this.state.birthdate,
            createdAt: this.state.user.createdAt,
            updatedAt: today.toISOString().split('T')[0]
        };
        console.log(user);

        axios.put(`http://127.0.0.1:8000/user`, user)
            .then(res => {
                console.log(res.data);
                window.location.replace("/");
            })
    }

    render() {
        return (
            <div>
                <button className="profileButton" onClick={this.handleOpen}>Perfil</button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 800 }}>
                        <h2 className='modalTitle'>Dados</h2>
                        <form onSubmit={this.editProfileInfo} className='addEventModalContainer'>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Nome</span>
                                <textarea className='modalSectionTextarea' defaultValue={this.state.userName} onChange={this.userNameChange} rows={"1"}></textarea>
                            </div>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>E-mail</span>
                                <textarea className='modalSectionTextarea' defaultValue={this.state.email} onChange={this.emailChange} rows={"1"} />
                            </div>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Data de nascimento</span>
                                <input className='modalSectionInput' defaultValue={this.state.birthdate} onChange={this.birthdateChange} type={"date"} />
                            </div>
                            <div className='modalSection'>
                                <span className='modalSectionTitle'>Celular</span>
                                <input className='modalSectionInput' defaultValue={this.state.phone} onChange={this.phoneChange} type={"tel"} />
                            </div>
                            <div className='modalButtonContainer'>
                                <button className="cancelAddEventButton" onClick={this.handleClose}>Cancelar</button>
                                <button className="addEventButton" onClick={this.editProfileInfo}>Editar</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
        );
    }
}