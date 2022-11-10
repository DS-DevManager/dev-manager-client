import React from "react";
import axios from "axios";

class SignUp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      // JSON 형식
      username: "",
      password: ""
    };
  }

  handleKeyUp = event => {
    console.log(event);
    switch (event.key) {
      case "Enter":
        this.authenticate();
        break;
      
      default:

    }
  }

  handleClickSignUp = event => {
    console.log(event);

    this.authenticate();
  }

  handleChangeInput = event => {
    console.log(event);

    this.setState({
      [event.target.id]: event.target.value
    });
  }

  authenticate = () => {

    let requestData = {
      username: this.state.username,
      password: this.state.password
    }

    
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:8080/signUp", requestData, {
      withCredentials: true
    }).then(response => {
      console.log(response);

      let {authToken} = response.data;
      
      this.props.setAuthState({authToken: authToken});
    });
  }

  render(){
    return (
      <div onKeyUp={this.handleKeyUp}>
        회원가입
        <div>
          <label>Username</label>
          <input id="username" onChange={this.handleChangeInput}></input>
        </div>

        <div>
          <label>Password</label>
          <input id="password" type="password" onChange={this.handleChangeInput}></input>
        </div>

        <button onClick={this.handleClickSignUp}>
            Sign Up
        </button>

        <button onClick={this.props.handleClickCancel}>
            Cancel
        </button>
      </div>
    );
  }
}

export default SignUp;