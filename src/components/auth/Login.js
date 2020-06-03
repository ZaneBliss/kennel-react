import React, { useState, useEffect, useRef } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(true);
  const email = useRef();
  const password = useRef();
  

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
    if (email.current.value !== '' && password.current.value !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */

    props.setUser(credentials, props.checked)
    props.history.push('/')
  };

  const updateChecked = () => {
    if (props.checked) {
      props.setChecked(false);
    } else if (!props.checked) {
      props.setChecked(true);
    }
  };

  useEffect(() => {
    props.setChecked(false);
  }, [credentials]);

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            ref={email}
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email address</label>

          <input
            ref={password}
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
        <button type="submit" disabled={disabled}>
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default Login;
