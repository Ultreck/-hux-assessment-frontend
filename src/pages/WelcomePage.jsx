import React from 'react';
import WelcomeNavBar from "../components/WelcomeNavBar";
import img from "../assets/hero-flipped-2.png"
import {useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
  return (
    <div >
      <div className="text fixed w-full bg-white top-0">
        <WelcomeNavBar />
      </div>
      <div className="text lg:flex mt-28 mb-10">
        <div className=" w-full md:w-1/2 text-center mx-auto">
          <h1 className="text-[#202020] lg:text-[#323A3E] lg:text-[70px] text-[48px] font-semibold lg:font-bold grid">
            <span className="text ">Smart Contact</span>
            <span className="text underline ml-2">Management</span>
          </h1>
          <p className="text-[22px] text-[#636D74] px-24 lg:text-[#242424] mt-8">
          Join our growing community today and take control of your contact management with Huxlog. Your journey to a more organized life starts here.
          </p>
          <div className="text mt-8">
            <button  onClick={() => {
              navigate('/registration');
              }} className="text border w-1/2 py-3 text-center bg-[#0FB8F5] text-white rounded-full">
              Sign Up
            </button>
          </div>
        </div>
        <div className=" w-full md:w-1/2 text-center flex justify-center mx-auto">
          <div className="text object-fit  w-4/5 bg-no-repeat bg-center my-10 lg:my-0">
            <img src={img} alt="" className="text h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
