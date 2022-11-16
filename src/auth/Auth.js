import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Auth(props) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      {!isSignUp
        ? <SignIn handleClickSignUp={() => setIsSignUp(true)} />
        : <SignUp handleClickCancel={() => setIsSignUp(false)} />}
    </div>
  );
}

export default Auth;