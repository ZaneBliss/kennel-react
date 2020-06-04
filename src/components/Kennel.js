import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => {
    if (sessionStorage.getItem("credentials") !== null || localStorage.getItem('credentials') !== null) {
      return true 
    } else return false
  }

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  const [hasUser, setHasUser] = useState(isAuthenticated());
  const [checked, setChecked] = useState(true)

  const setUser = (user, checked) => {
    if (!checked) {
      sessionStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    } else if (checked) {
      localStorage.setItem("credentials", JSON.stringify(user));
      setHasUser(isAuthenticated());
    }
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser}/>
      <ApplicationViews hasUser={hasUser} setUser={setUser} checked={checked} setChecked={setChecked} />
    </>
  );
};

export default Kennel;