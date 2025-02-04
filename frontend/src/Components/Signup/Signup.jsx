import React, { useState } from "react";
import logo from "../../assets/logo.png";
import background from "../../assets/bg.jpeg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const bgstyle = {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
    };

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate();
    const handlesubmit = async(e) =>{
      e.preventDefault();
      try {
        await axios.post("http://localhost:4000/signup",{email,password})
        setEmail("");
        setPassword("");
        console.log('inserted')
      } catch (error) {
        console.log(error,"error inserting")
      }

      toast.success("SignUp Successfull!",{
        autoClose:3000
      })
      setTimeout(()=>{
        navigate('/')
      },3500)

    }

  return (
      <div className="text-white font-stylish">
        <div className="p-6 md:p-6" style={bgstyle}>
          <img src={logo} alt="" className="w-[27vw] md:w-[10vw]" />
          <div className="bg-black bg-opacity-70 max-w-[80vw] mx-auto max-h-[80vh] px-3 mt-20 pb-4 md:bg-black md:bg-opacity-70 md:max-w-[27vw] md:mx-auto md:max-h-[120vh] md:px-5 md:mt-5 md:pb-4">
            <form onSubmit={handlesubmit}>
            <div className="pt-10 ms-6 md:pt-14 md:ms-6 ">
              <h1 className="text-2xl font-semibold md:text-3xl md:font-semibold">Sign Up</h1>
            </div>
            <div className="flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center">
              <div className="pt-5 md:pt-5">
                <input
                  type="text"
                  placeholder="Email"
                  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                  className="bg-gray-600 w-[60vw] h-10 p-5 md:bg-gray-600 md:w-[20vw] md:h-10 md:p-5"
                />
              </div>
              <div className="pt-5 md:pt-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                  className="bg-gray-600 w-[60vw] h-10 p-5 md:bg-gray-600 md:w-[20vw] md:h-10 md:p-5"
                />
              </div>
              <div className="pt-8 md:pt-7">
                <button className="bg-red-700 w-[60vw] h-10 md:bg-red-700 md:w-[20vw] md:h-10">Sign Up</button>
                <ToastContainer/>
              </div>
            </div>
            <div className="ms-6 pt-2 flex max-w-[60vw] justify-between items-center text-sm md:ms-6 md:pt-1.5 md:flex md:max-w-[20vw] md:justify-between md:items-center">
              <div className="flex gap-2 md:flex md:gap-3">
                <input type="checkbox" />
                <h1>Remember Me</h1>
              </div>
              <div>
                <h1>Need Help?</h1>
              </div>
            </div>
            <div className="ms-6 pt-7 flex gap-7 text-sm pb-3 md:ms-6 md:pt-10 md:flex md:gap-2 md:pb-3">
              <h1>Already a User?</h1>
              <a href="/"><h1>Login</h1></a>
            </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Signup;
