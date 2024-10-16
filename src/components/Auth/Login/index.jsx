import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegisterFinish from "../Register/RegisterFinish";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import exit from "@assets/images/exit.png";
import { useEffect } from "react";
import { loginAPI } from "@core/services/api/auth/auth";
import { Link } from 'react-router-dom'; // برای مسیریابی درون‌برنامه‌ای
import { setItem } from "../../common/storage.services";
import { getProfile } from "../../../core/services/api/user/user";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, MantineProvider, NavLink } from "@mantine/core";

const Login = () => {

  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/landing");
  };

  const loginUser = async (values) => {
    const userObj = {
      phoneOrGmail: values.emailMob,
      password: values.password,
      rememberMe: true,
    };
    
    const user = await loginAPI(userObj);
    if (user.token) {
      console.log(user.token);
      alert(user.message);
      goToNextPage();
    }
    else{
      alert(user.message)
    }
    
    setItem("token", user.token);
  };
  const getProfileFunc = async () => {
    const user = await getProfile();
    console.log(user);
  };
  // useEffect(()=>{loginUser()},[])

  const [opened, { open, close }] = useDisclosure(false);
  const validationSchema = Yup.object({
    emailMob: Yup.string().required("*"), // پیام خطای فیلد خالی
    password: Yup.string().required("*"), // پیام خطای فیلد خالی
  });

  
  return (
    <>
      <MantineProvider>
        <Modal
          className="dirAuth"
          opened={opened}
          onClose={close}
          withCloseButton={false}
          radius={24}
          // title="ورود به حساب"
          //  size="auto"
        >
          {/* <div> */}
          {/* <div class="mx-auto w-[420px] h-[490px] bg-white rounded-[24px] absolute top-[100px] inset-0"> */}
          <div>
            <div class="flex flex-row justify-between px-6 my-5">
              <div class="text-[#263238] flex flex-row justify-center items-center leading-[49.6px] text-[32px] text-right">
                ورود به حساب
              </div>
              <div class="w-12 h-12 rounded-xl bg-slate-200 flex flex-row justify-center items-center
              cursor-pointer"
              onClick={close} 
              >
                <img class="w-6 h-6" src={exit}></img>
              </div>
            </div>
            <Formik
              initialValues={{
                acceptedTerms: true,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                loginUser(values);
              }}
            >
              {({ values }) => (
                <Form>
                  <div>
                    <Field
                      class="w-[356px] h-[56px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC] pr-[25px] 
                      text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]
                      relative"
                      name="emailMob"
                      placeholder="ایمیل یا شماره موبایل"
                    />
                    <ErrorMessage
                      name="emailMob"
                      component="p"
                      style={{ color: "red" }}
                      class="absolute top-[160px] right-[5px]"
                    />
                    <Field
                      class="w-[356px] h-[56px] mb-[15px] rounded-[30px] border-[1px] border-[#CFD8DC] pr-[25px] 
                      text-[16px] focus:outline-none focus:ring focus:ring-[#CFD8DC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.1)]
                      relative"
                      name="password"
                      placeholder="رمز عبور"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      style={{ color: "red" }}
                      class="absolute bottom-[220px] right-[5px]"
                    />
                  </div>
                  <div class="px-8">
                    <div class="container mx-auto flex flex-nowrap justify-between">
                      <div>
                        <Field
                          type="checkbox"
                          name="acceptedTerms"
                          id="show"
                          className="checkBox"
                        />
                        <label htmlFor="show"> من را به خاطر بسپار </label>
                      </div>
                      <div>
                        {/* <NavLink to="#" >رمز عبور را فراموش کردم</NavLink> */}
                        <a href="#" class="text-[#2196F3]">
                          رمز عبور را فراموش کردم
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="mt-[35px]  flex flex-row justify-center">
                    <button
                      onClick={() => {
                        // getProfileFunc()
                        loginUser();
                      }}
                      type="submit"
                      class="m-[15px] w-[208px] h-[56px] bg-[#2196F3] text-[rgba(255,255,255,1)] rounded-[80px]
                    drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]
                     border-none transition ease-in-out hover:scale-105 duration-[.3s] "
                    >
                      دریافت کد تایید
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div class="leading-[14px] flex flex-row  ">
              <div class="leading-[14px] ">حساب کاربری ندارید؟</div>
              <div class="leading-[14px] ">
                <NavLink
                  class="text-[#2196F3]"
                  label="ثبت نام"
                  // component={Link} to="/"
                />


              </div>
            </div>
          </div>
          {/* </div> */}
        </Modal>
        <Button onClick={open}>ورود</Button>
      </MantineProvider>
    </>
  );
};

export default Login;
