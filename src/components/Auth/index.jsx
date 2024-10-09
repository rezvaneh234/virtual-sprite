import React from "react";
import Login from "./Login";
import Register from "./Register";
import ConfirmCode from "./ConfirmCode";
const Auth = () => {
  return (
    <div
      class="w-screen h-screen bg-slate-400 max-w-full relative"
      className="dirAuth"
    >
      <ConfirmCode />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
};

export default Auth;
