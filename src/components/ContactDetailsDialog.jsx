import React, { useEffect } from 'react'
import { Button } from "../components/shdcn/ui/ui/button";
import { Input } from "../components/shdcn/ui/ui/input";
import { Label } from "../components/shdcn/ui/ui/label";
import { TbListDetails } from "react-icons/tb";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/shdcn/ui/ui/sheet";
import httpClient from '../http/httpClient';
import { BiLogoGmail } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";



const ContactDetailsDialog = ({mode, hoverValue, value}) => {
    useEffect(() => {
        console.log(value);
        
    //  httpClient.get(`/get-only-one-contact/${value._id}`)
    //  .then((Response) => {
    //     console.log(Response);
        
    //  }).catch((error) => {
    //     console.log(error);
        
    //  });    
    }, [])
    
  return (
    <div>
       <Sheet className="w-1/2">
      <SheetTrigger asChild>
      <button title="View"
              className={`text ${
                hoverValue !== value._id && "invisible"
              }  rounded-lg px-2 py-1 flex justify-center items-center hover:text-white hover:bg-gray-400 `}
            >
              <TbListDetails className="text-2xl" />
            </button>
      </SheetTrigger>
      <SheetContent  overlayClassName="opacity-40"
        sheetCloseClassName="left-3 top-[30px] text-2xl text-shadcn-foreground w-fit"
        className="min-w-[666px] bg-[#FBFBFB] flex flex-col p-10 py-40"
        >
        <SheetHeader>
        </SheetHeader>
        <div className="grid gap-4 p-6 w-full bg-sky-100 rounded-xl">
         <h1 className="text font-semibold text-2xl">Contact details</h1>
         <div className="">
            <div className="text flex gap-4 text-2xl my-7 items-center">
                <BiLogoGmail/>
                <span className="">{value.email}</span>
            </div>
            <div className="text flex gap-4 text-2xl my-7 items-center">
                <FaUser/>
                <span className="">{value.firstName + " " + value.lastName}</span>

            </div>
            <div className="text flex gap-4 text-2xl my-7 items-center">
                <RiContactsFill/>
                <span className="">{value.phoneNumber}</span>

            </div>
         </div>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default ContactDetailsDialog