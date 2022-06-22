import React, { Component } from "react";
import axios from 'axios';
import "../Styles/LoginPage.css";

export default class LoginPage extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    isTeacher: 0,
    userEmail: '',
    userPassword: ''
  }

  changeToLogin = () => {
    var loginContainer = document.getElementById("loginForm");
    if (loginContainer != null) loginContainer.classList.remove("hide");
    var createUserContainer = document.getElementById("createUserForm");
    if (createUserContainer != null) createUserContainer.classList.add("hide");
  }

  changeToCreate = () => {
    var loginContainer = document.getElementById("createUserForm");
    loginContainer.classList.remove("hide");
    var createUserContainer = document.getElementById("loginForm");
    createUserContainer.classList.add("hide");
  }

  nameChange = event => {
    this.setState({ userName: event.target.value });
  }

  emailChange = event => {
    this.setState({ email: event.target.value });
  }

  passwordChange = event => {
    this.setState({ password: event.target.value });
  }

  isTeacherChange = event => {
    this.setState({ isTeacher: event.target.value });
  }

  userEmailChange = event => {
    this.setState({ userEmail: event.target.value });
  }

  userPasswordChange = event => {
    this.setState({ userPassword: event.target.value });
  }

  createUserSubmit = event => {
    event.preventDefault();

    let today = new Date();

    const user = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      profileType: this.state.isTeacher === "on" ? 1 : 2,
      phone: "0",
      birthdate: today.toISOString().split('T')[0],
      createdAt: today.toISOString().split('T')[0],
      updatedAt: today.toISOString().split('T')[0]
    };

    axios.post(`http://127.0.0.1:8000/user`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
      })
  }

  loginSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.userEmail,
      password: this.state.userPassword,
    };

    axios.post(`http://127.0.0.1:8000/auth/jwt/create/`, user)
      .then(res => {
        localStorage.setItem('access', res.data.access);
        localStorage.setItem('refresh', res.data.refresh);

        axios.post(`http://127.0.0.1:8000/auth/jwt/verify/`, { token: res.data.access })
          .then(res => {
            var config = {
              method: 'get',
              url: 'http://127.0.0.1:8000/userEmail',
              headers: {
                'email': this.state.userEmail
              }
            };
            axios(config)
              .then(function (response) {
                localStorage.setItem('user', JSON.stringify(response.data));
              })
              .then(res => {
                window.location.replace("/")
              });
          })

      })
  }

  render() {
    return (
      <div className="loginPageContainer">
        <div className="leftContainer">
          <div className="imageContainer"></div>
        </div>
        <div className="rightContainer">
          <div className="mainContainer">
            <form className="formContainer" onSubmit={this.loginSubmit} id="loginForm">
              <h1 className="formTitle">Faça login com a sua conta Conecte Estudo</h1>
              <div className="form">
                <label className="labelStyle">E-mail</label>
                <input className="formInput" name="userEmail" type="text" placeholder="Entre com o e-mail" onChange={this.userEmailChange} />
                <label className="labelStyle">Senha</label>
                <input className="formInput" name="userPassword" type="password" placeholder="Entre com a sua senha" onChange={this.userPasswordChange} />
                {/* <label className="passRule">Deve conter no mínimo 8 caracteres</label> */}
              </div>
              <button className="loginButton" type="loginSubmit">Entrar</button>
              <label className="register">Não possui uma conta? <span onClick={this.changeToCreate}>Clique aqui e cadastre-se</span></label>
            </form>
            {/* ------------------------------------------------------------------------------------------ */}
            <form className="formContainer hide" id="createUserForm" onSubmit={this.createUserSubmit}>
              <h1 className="formTitle">Cadastre-se agora</h1>
              <div className="form">
                <label className="labelStyle">Nome de usuário</label>
                <input name="userName" onChange={this.nameChange} className="formInput" type="text" placeholder="Entre com o seu nome completo" />
                <label className="labelStyle">E-mail</label>
                <input name="email" onChange={this.emailChange} className="formInput" type="text" placeholder="Entre com um e-mail válido" />
                <label className="labelStyle">Senha</label>
                <input name="password" onChange={this.passwordChange} className="formInput" type="password" placeholder="Entre com a sua senha" />
                <label className="passRule">Deve conter no mínimo 8 caracteres</label>
                <label className="labelStyle">Confirmar senha</label>
                <input className="formInput" type="password" placeholder="Entre com a sua senha novamente" />
                <label className="passRule">Deve conter no mínimo 8 caracteres</label>
                <div>
                  <input type={"checkbox"} name="isTeacher" onChange={this.isTeacherChange} />
                  <span>Sou professor</span>
                </div>
              </div>
              <button type="createUserSubmit" className="loginButton">Cadastrar</button>
              <label className="register">Já possui uma conta? <span onClick={this.changeToLogin}>Faça login</span></label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
