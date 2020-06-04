import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/')
  }


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
          {props.hasUser
          ? <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/animals">
              Animals
            </NavLink>
          </li>
          : null}
          <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/locations">
              Locations
            </NavLink>
          </li>
          {props.hasUser
          ? <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/owners">
              Owners
            </NavLink>
          </li>
          : null}
          {props.hasUser
          ? <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/employees">
                Employee
            </NavLink>
          </li>
          : null}
          {props.hasUser 
          ? <li>
            <span activeStyle={{ color: "gold" }} className="nav-link" onClick={handleLogout}> Logout </span>
          </li>
          : <li>
            <NavLink exact activeStyle={{ color: "gold" }} className="nav-link" to="/login">
              Login
            </NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);