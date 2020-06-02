import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [checked, setChecked] = useState([]);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
   
    if (!checked) {
      console.log("not checked");
      sessionStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    } else if (checked) {
      console.log("checked");
      
      localStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    }
  };

  const updateChecked = () => {
    if (checked) {
      setChecked(false);
    } else if (!checked) {
      setChecked(true);
    }
  };

  useEffect(() => { 
    setChecked(false);
  }, [])

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email address</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
          <input type="checkbox" onClick={updateChecked}></input>
          <label>Remember me</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;
