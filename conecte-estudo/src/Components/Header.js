import React, { Component } from "react";
import "../Styles/Header.css";
import { Dropdown } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import ProfileInfo from "../Components/Modals/ProfileInfo.js";

export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer flexContainer">
        <div className="optionsContainer flexContainer">
          {/* <img alt="logo" className="headerLogo" src={} /> */}
          <Dropdown as={ButtonGroup}>
            <a href="/" variant="success" className="headerOption textShadow fontStyle">Início</a>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="dropdownDots">...</Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
              <Dropdown.Item className="dropdownItem bb-c2"><ProfileInfo/></Dropdown.Item>
              <Dropdown.Item href="/registered-classes" className="dropdownItem bb-c2">Turmas</Dropdown.Item>
              <Dropdown.Item href="/class-materials" className="dropdownItem bb-c2">Materiais de aula</Dropdown.Item>
              <Dropdown.Item className="dropdownItem">Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="userContainer textShadow flexContainer">
          {/* <img alt="icon" className="userIcon" src={cookerIcon} /> */}
          <div className="fontStyle">Olá, Marcelo!</div>
        </div>
      </div>
    );
  }
}
