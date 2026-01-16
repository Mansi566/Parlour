import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="login-container p-15 w-125 bg-white rounded-xl shadow-md space-y-6">
            <form className="login-form space-y-4 ">
              <div className="flex">
                <h1 className="font-semibold text-2xl">Login</h1>
              </div>
              <div className="space-y-4">
                <div className="space-x-10">
                  <label htmlFor="email" className="text-gray-600 space-y-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-1 w-full border border-gray-400 hover:border-[#a94ef0] 
                    focus:border-[#a94ef0] focus:outline-none focus:ring-2 focus:ring-[#a94ef0]/15"
                  />
                </div>
                <div className="space-x-10">
                  <label htmlFor="password" className="text-gray-600 space-y-2">
                    Password
                  </label>
                  <div className=" relative flex flex-col items-end">
                    <input
                      type={showPassword ? "text" : "password"}
                      className=" w-full p-2 pr-10 border border-gray-400 rounded
                   focus:border-[#C648C3] focus:ring-2 focus:ring-[#C648C3]/40
                   focus:outline-none"
                      placeholder="Enter password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 flex items-center 
                      text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <div>
                  <Link
                    to="/admin"
                    className="block text-center 
                    bg-[#a94ef0] text-white w-full py-2 rounded-md 
                    hover:bg-[#8b3ec7] 
                    cursor-pointer transition ease-in-out 
                    hover:-translate-x-1 hover:scale-110"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
