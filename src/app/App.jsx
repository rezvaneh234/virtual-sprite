import SendSms from "@components/Auth/Register/SendSms";
import "./App.css";
<<<<<<< HEAD
import Login from '../components/Auth/Login'
=======
import Auth from "@components/Auth";
import Login from "@components/Auth/Login";
import { loginAPI } from "@core/services/api/auth/auth";
import { useEffect } from "react";
>>>>>>> af5ceba0b24620e71986f28c6410fd70fc5998d7

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
<<<<<<< HEAD
    <>
      <div>
      <Login/>

      </div>
    </>
=======
    <div>
      {/* <Register /> */}
     {/* <Auth/> */}
     <Login/>
    </div>
>>>>>>> af5ceba0b24620e71986f28c6410fd70fc5998d7
  );
}

export default App;
