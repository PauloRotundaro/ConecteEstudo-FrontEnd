import React, { Component } from "react";
import "../Styles/LoginPage.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="loginPageContainer">
        <div className="leftContainer">
          <img src="../Images/loginImage.png"></img>
        </div>
        <div className="rightContainer">
          <div className="mainContainer">
            <form className="formContainer" style={{ display: 'none' }}>
              {/* <form className="formContainer"> */}
              <h1 className="formTitle">Faça login com a sua conta Conecte Estudo</h1>
              <div className="form">
                <label className="labelStyle">E-mail</label>
                <input className="formInput" type="text" placeholder="Entre com o e-mail" />
                <label className="labelStyle">Senha</label>
                <input className="formInput" type="password" placeholder="Entre com a sua senha" />
                {/* <label className="passRule">Deve conter no mínimo 8 caracteres</label> */}
              </div>
              <button className="loginButton">Entrar</button>
              <label className="register">Não possui uma conta? <a href="#">Clique aqui e cadastre-se</a></label>
            </form>
            {/* <form className="formContainer" style={{display: 'none'}}> */}
            <form className="formContainer">
              <h1 className="formTitle">Cadastre-se agora</h1>
              <div className="form">
                <label className="labelStyle">Nome de usuário</label>
                <input className="formInput" type="text" placeholder="Entre com o seu nome completo" />
                <label className="labelStyle">E-mail</label>
                <input className="formInput" type="text" placeholder="Entre com um e-mail válido" />
                <label className="labelStyle">Senha</label>
                <input className="formInput" type="password" placeholder="Entre com a sua senha" />
                <label className="passRule">Deve conter no mínimo 8 caracteres</label>
                <label className="labelStyle">Confirmar senha</label>
                <input className="formInput" type="password" placeholder="Entre com a sua senha novamente" />
                <label className="passRule">Deve conter no mínimo 8 caracteres</label>
              </div>
              <button className="loginButton">Cadastrar</button>
              <label className="register">Já possui uma conta? <a href="#">Faça login</a></label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
