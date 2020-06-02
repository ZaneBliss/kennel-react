import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/locations">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/owners">
              Owners
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/employees">
                Employee
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);