import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class Auth extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      signUp  : false
    };
  }

  handleClickSignUp = (event) => {
    console.log(event);

    this.setState({signUp: true});
  }

  handleClickCancel = event => {
    console.log(event);
    
    this.setState({signUp: false});
  }

  render(){
    return (
        <div>
            {!this.state.signUp
            ? <SignIn setAuthToken={this.props.setAuthToken} handleClickSignUp={this.handleClickSignUp}/>
            : <SignUp setAuthToken={this.props.setAuthToken} handleClickCancel={this.handleClickCancel}/>}
        </div>
    );
  }
}

export default Auth;