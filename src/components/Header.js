import React from "react";

import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <header className="nav-extended cyan darken-4 row">
        <div className="valign-wrapper col s6 white-text">
          <i className="material-icons purple-text text-lighten-3">spa</i>
          <a className="white-text"> All Natural & Eco </a>
          <i className="material-icons purple-text text-lighten-3">spa</i>
        </div>
        <div className="valign-wrapper col s6">
          <a className="white-text dropdown-trigger btn" data-target="dropdown1"> Products </a>
          <a className="white-text dropdown-trigger btn" data-target="dropdown1"> Articles </a>
        </div>
      </header>
    )
  }
};


export default Header;