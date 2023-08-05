import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setLogin }) => {
  // const { register, handleSubmit } = useForm();
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



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowCinfirmPassword] = useState(false);
//  const [accType, setAccType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  
  function submitHandler(event) {
    event.preventDefault();

    if (formData.password != formData.confirmPassword) {
      toast.error("Password Not Match");
      return;
    }

    setLogin(true);
    toast.success("Account Created!");
    const allData = {
        ...formData
    }
    console.log(allData);
    createEmployee(allData);
    navigate("/dashboard");
  }

  return (
    <div className="flex justify-evenly mt-28 flex-wrap-reverse">
      

      <form className=" p-2 mt-5 w-[35vw]"
      onSubmit={submitHandler}>
        <div className="flex gap-20">
          <label>
            <p className="font-bold text-[#024f4f]">
              First Name<sup className="text-[red]">*</sup>
            </p>
            <input
             className="p-2 bg-[#d1edf576] w-[120%] rounded-lg mt-2"
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p className="font-bold text-[#024f4f] ">
              Last Name<sup className="text-[red]">*</sup>
            </p>
            <input
             className="p-2 bg-[#d1edf576] w-[120%] rounded-lg mt-2"
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p className="font-bold text-[#024f4f] mt-7">
            Email Address<sup className="text-[red]">*</sup>
          </p>
          <input
           className="p-2 bg-[#d1edf576] w-[100%] rounded-lg mt-2"
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address "
            value={formData.email}
          />
        </label>

        <div>
          <label>
            <p className="font-bold text-[#024f4f] mt-7">
              Create Password<sup className="text-[red]">*</sup>
            </p>
            <div className="relative">

            
            <input
             className="p-2 bg-[#d1edf576] w-[100%] rounded-lg mt-2"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
            className="absolute top-5 right-1 cursor-pointer" 
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>
          </label>

          <label>
            <p className="font-bold text-[#024f4f] mt-7">
              Confirm Password<sup className="text-[red]">*</sup>
            </p>
            <div className="relative">

            
            <input
             className="p-2 bg-[#d1edf576] w-[100%] rounded-lg mt-2"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
            className="absolute top-5 right-1"
             onClick={() => setShowCinfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
            </div>
          </label>
        </div>
        <button className="bg-cyan-950 text-[#ffffff] p-3 rounded-md w-[100%] mt-8 shadow-md">Create Account</button>
      </form>




      <img src="../assets/signup.jpg" width={500} height={300} className="rounded-lg shadow-lg"></img>
    </div>
  );
};

export default SignupForm;
