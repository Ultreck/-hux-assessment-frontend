import React from 'react';
import { RiContactsLine } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";

const WelcomeNavBar = () => {
  const navigate =  useNavigate();
  const [, setSearchParams] = useSearchParams(); 
  const handleType = (type) => {
    setSearchParams({regType: type});

    navigate("/registration", { replace: true })
  };
  
  return (
    <div>
      <nav className="px-10 h-24 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text w-14 h-14 rounded-full bg-sky-500  flex justify-center items-center text-white font-semibold text-xl lg:text-3xl">
            <RiContactsLine />
          </div>
          <div className="text-sky-500 font-extrabold text-xl lg:text-3xl mx-4">
            Huxlog
          </div>
        </div>
        <div className="text">
          <ul className="text flex lg:gap-7 gap-2 font-semibold">
            <list
              onClick={() =>handleType("signup") }
            className="text cursor-pointer border-2 border-sky-500 px-7 py-2 rounded-full"
            >
              Sign Up
            </list>
            <list  onClick={() =>handleType("login") } className="text cursor-pointer px-7 py-2">Login</list>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default WelcomeNavBar;
