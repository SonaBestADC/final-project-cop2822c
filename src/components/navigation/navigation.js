import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../img/mirnas-cafe-logo-50.png";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export default class Navigation extends Component {
  constructor() {
    super();
    this.navInfo = [
      {
        to: "/About",
        content: "About Us",
      },
      {
        to: "/Menu",
        content: "Our Menu",
      },
      {
        to: "/Contact",
        content: "Contact Us",
      },
    ];
  }

  render() {
    return (
      <Navbar className={`component-nav sticky-top`} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Mirna's Cafe logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" as="div">
            {this.navInfo.map((navItem, index) => {
              return (
                <NavLink className="nav-link" activeClassName="active" to={navItem.to} key={index}>
                  {navItem.content}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
