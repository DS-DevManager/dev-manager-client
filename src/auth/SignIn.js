import React, { useState } from "react";
import axios from "axios";


// if (isValid){
//     axios.defaults.headers.Authorization = `Bearer ${authToken}`
//   }

function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        console.log(event);
    
        requestSignIn(username, password);

        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            로그인

            <div>
                username
                <input onChange={setUsername}></input>
            </div>
            
            <div>
                password
                <input type="password" onChange={setPassword}></input>
            </div>

            <button type="submit" onClick={handleSubmit}>Sign In</button>
            <button onClick={props.handleClickSignUp}>Sign Up</button>
        </form>
    );
}

function requestSignIn(username, password) {
    axios.post("/signIn", null, {
        auth: {
            username: username,
            password: password
        }
    }).then(response => {
        console.log(response);

        let { authToken } = response.data;

        axios.defaults.headers.Authorization = authToken;
    });
}

export default SignIn;