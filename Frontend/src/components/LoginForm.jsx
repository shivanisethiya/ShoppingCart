import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setLogin}) => {
  const navigate = useNavigate();
  const createEmployee = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);


    navigate("/")


    };





  const nav = useNavigate();
  const [formData, setFormdata] = useState({ email: "", password: "" });
  
  const [showPassword, setshowPassword] = useState(false);
  
  function changeHandler(event) {
    setFormdata((prev) => (
    {
        ...prev,
        [event.target.name]: event.target.value
    }
    ));
  }
  function submitHandler(event){
    event.preventDefault();
    setLogin(true);
    toast.success("Logged In");
    createEmployee(formData);
    nav("/dashboard");
  }
  return (
    <div className="gap-40 flex justify-evenly  mt-40 flex-wrap-reverse">
   
      <form onSubmit={submitHandler}
      className=" p-10 mt-5 w-[30vw] ">
        <label>
          <p className="font-bold text-[#024f4f]">
            E-Mail Address
            <sup className="text-[red]">*</sup>
          </p>

          <input
          className="p-1 bg-[#d1edf576] w-[100%] rounded-lg mt-2"
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
            name="email"
          />
        </label>
        <label>
          <p className="text-[#135555] font-bold mt-7">
            Password
            <sup className="text-[red]">*</sup>
          </p>
          <div className="relative">
          <input className="p-1 bg-[#d1edf576] w-[100%] rounded-lg mt-2"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            name="password"
          />

          <span className="absolute top-4 right-1 cursor-pointer"
            onClick={() => {
              setshowPassword((prevValue) => !prevValue);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
</div>
<div className="flex justify-end mt-2">


          <Link to="#"
          className="text-[#0f3f47]">
            <p className="text-[12px]  font-semibold">Forgot Password</p>
          </Link>
</div>
        </label>

        <button className="bg-cyan-950 text-[#ffffff] p-2 rounded-md w-[100%] mt-5 shadow-md">Sign In</button>
      </form>
      <img src="../assets/login.webp" width={480} height={300} className="rounded-lg shadow-lg"></img>
    </div>
  );
};

export default LoginForm;
