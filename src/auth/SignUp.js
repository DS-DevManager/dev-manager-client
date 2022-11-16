import React, { useState } from "react";
import axios from "axios";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    console.log(event);

    requestSignUp(username, password);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      회원가입

      <div>
        username
        <input onChange={setUsername}></input>
      </div>

      <div>
        password
        <input type="password" onChange={setPassword}></input>
      </div>

      <button type="submit" onClick={handleSubmit}>Sign Up</button>
      <button onClick={props.handleClickCancel}>Cancel</button>
    </form>
  );
}

function requestSignUp(username, password) {
  axios.post("/signUp", null, {
    auth: {
      username: username,
      password: password
    }
  }).then(response => {
    console.log(response);

    let { authToken } = response.data;

    axios.defaults.auth = {username, password};
    axios.defaults.headers.Authorization = authToken;
  });
}

export default SignUp;