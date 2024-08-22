import React from "react";
import ContactDialog from "./ContactDialog";
import useContactHook from "../hooks/useContactHook";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";


const SideBar = () => {
  const { contacts, setMode, mode } = useContactHook();
  return (
    <div className="bg-slate-50 lg:p-6 p-2 min-h-screen hidden lg:block">
       <div className="flex items-center">
          <div className="text w-14 h-14 rounded-full bg-sky-500  flex justify-center items-center text-white font-semibold text-xl lg:text-3xl">
            <RiContactsLine />
          </div>
          <div className="text-sky-500 font-extrabold text-xl lg:text-3xl mx-4">
            Huxlog
          </div>
        </div>
      <ContactDialog mode={mode} />
      <NavLink
        className={({ isActive }) =>
          ` rounded-full mt-10 hover:bg-sky-200 bg-sky-100  flex justify-center items-center ${
            isActive ? "bg-[#B3D0FF] text-black" : ""
          }`
        }
        to="/contacts"
      >
        <div className=" w-full ">
          <div className="relative py-5 text-2xl cursor-pointer flex items-center  px-5 justify-around  w-full ">
            <FaUser />
            Contacts
            <div className="">{contacts.length}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
