import React from "react";
import { Navbar, Dropdown, Button } from 'react-materialize';

import "../index.css";

class Header extends React.Component {
  render() {
    return (
      /*<header className="nav-extended cyan darken-4 row">
        <div className="valign-wrapper col s6 white-text">
          <i className="material-icons purple-text text-lighten-3">spa</i>
          <a className="white-text"> All Natural & Eco </a>
          <i className="material-icons purple-text text-lighten-3">spa</i>
        </div>
        <div className="valign-wrapper col s6">
          <a className="white-text dropdown-trigger btn" data-target="dropdown1"> Products </a>
          <a className="white-text dropdown-trigger btn" data-target="dropdown1"> Articles </a>
        </div>
      </header>*/
      //valign-wrapper
      <Navbar className="nav-extended-header cyan darken-4 row">
        <div  brand='' className="valign-wrapper col s6 white-text"> 
          <i className="material-icons purple-text text-lighten-3">spa</i>
          <a className="white-text"> All Natural & Eco </a>
          <i className="material-icons purple-text text-lighten-3">spa</i>
        </div>
        <div className="valign-wrapper col s6">
          <div className="row center-align"> 
            <div className="col s6">
              <Dropdown trigger={
                <Button className="button-header"> Categories </Button>}
                > 
                <li> Oils </li>
                <li> Arotherapic </li>
                <li> Soaps </li>
              </Dropdown>
            </div>
            <div className="col s6">
              <Dropdown trigger={
                <Button className="button-header"> Articles </Button>}
                > 
                <li> Oils </li>
                <li> Arotherapic </li>
                <li> Soaps </li>
              </Dropdown>
            </div>
          </div>
        </div>
      </Navbar>
    )
  }
};


export default Header;