import React from "react";
import Auth from "./auth/Auth";
import DashBoard from "./manager/DashBoard";

class DevManager extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      authToken: ""
    };
  }

  setAuthToken = (authToken) => {
    this.setState({
      authToken: authToken
    });
  }

  render(){ 
    const {authToken} = this.state;
    let username = "USER!@#";

    console.log(this.state);

    return (
      <div>
        <header></header>
        <div>
          {authToken === "" ? <Auth setAuthState={this.setAuthToken}/> : <DashBoard username={username}/>}
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default DevManager;