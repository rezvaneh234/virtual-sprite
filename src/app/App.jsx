import SendSms from "@components/Auth/Register/SendSms";
import "./App.css";
import Auth from "@components/Auth";
import Login from "@components/Auth/Login";
import { loginAPI } from "@core/services/api/auth/auth";
import { useEffect } from "react";

function App() {
  // const loginUser = async()=>{
  //   const userObj = {
  //     "phoneOrGmail": "masg1377@gmail.com",
  //     "password": "123456",
  //     "rememberMe": true
  //   }
  //   const user = await loginAPI(userObj)
  //   console.log(user)
  // }
  // useEffect(()=>{loginUser()},[])
  return (
    <div>
      {/* <Register /> */}
     {/* <Auth/> */}
     <Login/>
    </div>
  );
}

export default App;
