import axios from "axios";
import React, { useState } from "react";
import Auth from "./auth/Auth";
import DashBoard from "./manager/DashBoard";

/**
 * 
 * @returns 
 */
function DevManager() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  console.log(axios.defaults.auth)

  axios.post("/authorize", {}, {
    auth: {
      username: "username",
      password: "password"
    }
  })
    .then(response => {
      setIsAuthorized(response.data);
    }).catch(reason => {
      console.log(reason);
    });

  return (
    <div>
      <header></header>
      <div>
        {isAuthorized === false ? <Auth /> : <DashBoard />}
      </div>
      <footer></footer>
    </div>
  );
}

export default DevManager;