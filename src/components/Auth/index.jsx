import React from "react";
import RegisterStep1 from "./Register/RegisterStep1";
import RegisterStep2 from "./Register/RegisterStep2";
import RegisterStep3 from "./Register/RegisterStep3";
import Login from "./Login";
// import Register from "./Register";
import RegisterFinish from "./Register/RegisterFinish";
import SendSms from "./Register/SendSms";
const Auth = () => {
  return (
    <div
      class="w-screen h-screen bg-slate-400 max-w-full relative"
      className="dirAuth"
    >
      {/* <SendSms/> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <RegisterFinish />
    </div>
  );
};

export default Auth;
