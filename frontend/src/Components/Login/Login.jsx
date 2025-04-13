import React from "react";
import logo from "../../assets/logo.png";
import background from "../../assets/bg.jpeg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const bgstyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const response = await axios.post("https://netflix-clone-backend-vas2.onrender.com/login", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("isLoggedIn","true")
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Error logging in");
      console.log(error);
    }
  };

  // isAuthenticated ? navigate("/moviepage") : navigate("/login");
  return (
    <div className="text-white font-stylish">
      <div className="p-6 md:p-6" style={bgstyle}>
        <img src={logo} alt="" className="w-[27vw] md:w-[10vw]" />
        <div className="bg-black bg-opacity-70 max-w-[80vw] mx-auto max-h-[80vh] px-3 mt-1 pb-4 md:bg-black md:bg-opacity-70 md:max-w-[27vw] md:mx-auto md:max-h-[120vh] md:px-5 md:mt-5 md:pb-4">
          <div className="pt-10 ms-6 md:pt-14 md:ms-6">
            <h1 className="text-2xl font-semibold md:text-3xl md:font-semibold">Sign In</h1>
          </div>
          <div className="flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center">
            <div className="pt-5 md:pt-5">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-600 w-[60vw] h-10 p-5 md:bg-gray-600 md:w-[20vw] md:h-10 md:p-5"
              />
            </div>
            <div className="pt-5 md:pt-5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-600 w-[60vw] h-10 p-5 md:bg-gray-600 md:w-[20vw] md:h-10 md:p-5"
              />
            </div>
            {error && <p className="pt-2 text-red-500 md:pt-2 md:text-red-500">{error}</p>}
            <div className="pt-8 md:pt-7">
              <button
                className="bg-red-700 w-[60vw] h-10 md:bg-red-700 md:w-[20vw] md:h-10"
                onClick={handlelogin}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="ms-6 pt-2 flex max-w-[60vw] justify-between items-center text-sm md:ms-6 md:pt-1.5 md:flex md:max-w-[20vw] md:justify-between md:items-center">
            <div className="flex gap-2 md:flex md:gap-3">
              <input type="checkbox" />
              <h1 className="">Remember Me</h1>
            </div>
            <div>
              <h1>Need Help?</h1>
            </div>
          </div>
          <div className="ms-6 pt-7 flex gap-7 text-sm pb-3 md:ms-6 md:pt-10 md:flex md:gap-2 md:pb-3">
            <h1>New to Netflix?</h1>
            <a href="/signup">
              <h1>Create Account</h1>
            </a>
          </div>
          <p className="max-w-[60vw] text-justify ms-6 md:max-w-[20vw] md:text-justify md:ms-6">
            This app is an open source so it takes time to load, wait for few
            minutes and then login.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
