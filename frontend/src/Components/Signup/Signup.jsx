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
        <div className="p-6" style={bgstyle}>
          <img src={logo} alt="" className="w-[10vw]" />
          <div className="bg-black bg-opacity-70 max-w-[27vw] mx-auto max-h-[100vh] px-5 mt-5">
            <form onSubmit={handlesubmit}>
            <div className="pt-14 ms-6 ">
              <h1 className="text-3xl font-semibold">Sign Up</h1>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="pt-5">
                <input
                  type="text"
                  placeholder="Email"
                  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                  className="bg-gray-600 w-[20vw] h-10 p-5"
                />
              </div>
              <div className="pt-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                  className="bg-gray-600  w-[20vw] h-10 p-5"
                />
              </div>
              <div className="pt-7">
                <button className="bg-red-700 w-[20vw] h-10">Sign Up</button>
                <ToastContainer/>
              </div>
            </div>
            <div className="ms-6 pt-1.5 flex max-w-[20vw] justify-between items-center">
              <div className="flex gap-3">
                <input type="checkbox" />
                <h1>Remember Me</h1>
              </div>
              <div>
                <h1>Need Help?</h1>
              </div>
            </div>
            <div className="ms-6 pt-14 flex gap-2 pb-14">
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
