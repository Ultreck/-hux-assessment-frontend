import React from 'react'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import img from "../assets/contactsecond.avif";

const RegistrationLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const datatype = searchParams.get("type");

  useEffect(() => {
    if (!datatype) {
      setSearchParams({ type: "signup" });
    }
  }, [datatype, setSearchParams]);
  console.log(datatype);
  return (
    <div>
      <div className="text flex bg-slate-50 min-h-screen">
        <div className="text w-full lg:w-1/2">
          <div className="text">
            <div className="text w-full p-10">
              <h1 className="text-4xl font-semibold text-sky-500 mb-5 sm:px-10">
                Unlock the Power of Seamless Contact Management!
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed tracking-wider  sm:px-10">
                At Huxlog, we believe that managing your contacts should be
                simple, efficient, and stress-free. By signing up for an
                account, you will gain access to an intuitive platform where you
                can effortlessly Save and Organize, Update with Ease, Delete
                Unneeded Contacts and more.
              </p>
              {/* <p className="text font-semibold text-xl text-gray-600 my-2 leading-relaxed tracking-wider">
                Sign Up Now and Experience the Difference!
              </p> */}
              <div className="text mt-10  sm:px-10">
                <div className="text w-full h-16 bg-sky-50 rounded-full flex justify-between items-center px-3 gap-5 py-2">
                  <div
                    onClick={() =>  setSearchParams({ type: "signup" })} className={`text w-1/2 cursor-pointer text-center h-full justify-center flex items-center ${
                      datatype === "signup" &&
                      "rounded-full bg-white shadow-lg border animate-in ease-in-out"
                    } `}
                  >
                    Register
                  </div>
                  <div
                    onClick={() =>  setSearchParams({ type: "login" })} className={`text w-1/2 cursor-pointer text-center h-full justify-center flex items-center ${
                      datatype === "login" &&
                      "rounded-full bg-white shadow-lg border animate-in ease-in-out"
                    }`}
                  >
                    Login
                  </div>
                </div>
              </div>
              <div className="text mt-10">
                {datatype === "signup" && <SignUp />}
                {datatype === "login" && <Login />}
              </div>
            </div>
          </div>
        </div>
        <div className="text hidden lg:block w-0 md:w-1/2 border-l">
          <img src={img} alt="" className="text min-h-screen" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationLayout;
