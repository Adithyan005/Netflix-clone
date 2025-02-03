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
      const response = await axios.post("http://localhost:4000/login", {
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
    }
  };

  // isAuthenticated ? navigate("/moviepage") : navigate("/login");
  return (
    <div className="text-white font-stylish">
      <div className="p-6" style={bgstyle}>
        <img src={logo} alt="" className="w-[10vw]" />
        <div className="bg-black bg-opacity-70 max-w-[27vw] mx-auto max-h-[120vh] px-5 mt-5 pb-4">
          <div className="pt-14 ms-6 ">
            <h1 className="text-3xl font-semibold">Sign In</h1>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="pt-5">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-600 w-[20vw] h-10 p-5"
              />
            </div>
            <div className="pt-5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-600  w-[20vw] h-10 p-5"
              />
            </div>
            {error && <p className="pt-2 text-red-500">{error}</p>}
            <div className="pt-7">
              <button
                className="bg-red-700 w-[20vw] h-10"
                onClick={handlelogin}
              >
                Sign In
              </button>
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
          <div className="ms-6 pt-10 flex gap-2 pb-3">
            <h1>New to Netflix?</h1>
            <a href="/signup">
              <h1>Create Account</h1>
            </a>
          </div>
          <p className="max-w-[20vw] text-justify ms-6">
            This app is an open source so it takes time to load, wait for few
            minutes and then login.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
