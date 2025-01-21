import React from "react";
import logo from "../../assets/logo.png";
import background from "../../assets/bg.jpeg";

const Login = () => {
  const bgstyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  };

  // isAuthenticated ? navigate("/moviepage") : navigate("/login");
  return (
    <div className="text-white font-stylish">
      <div className="p-6" style={bgstyle}>
        <img src={logo} alt="" className="w-[10vw]" />
        <div className="bg-black bg-opacity-70 max-w-[27vw] mx-auto max-h-[100vh] px-5 mt-5">
          <div className="pt-14 ms-6 ">
            <h1 className="text-3xl font-semibold">Sign In</h1>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="pt-5">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="bg-gray-600 w-[20vw] h-10 p-5"
              />
            </div>
            <div className="pt-5">
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-600  w-[20vw] h-10 p-5"
              />
            </div>
            <div className="pt-7">
              <button className="bg-red-700 w-[20vw] h-10">Sign In</button>
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
            <h1>New to Netflix?</h1>
            <h1>Sign up now</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
