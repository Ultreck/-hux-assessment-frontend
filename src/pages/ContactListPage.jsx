import { useEffect, useState } from "react";
import { ScrollArea } from "../components/shdcn/ui/ui/scroll-area";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import useContactHook from "../hooks/useContactHook";
import { setUser } from "../redux/userSlice";
import ContactDialog from "../components/ContactDialog";
import ContactDetailsDialog from "../components/ContactDetailsDialog";
import ContactDeleteDialog from "../components/ContactDeleteDialog";
import { FaUser } from "react-icons/fa6";
import img from "../assets/search.svg";

const ContactListPage = ({ data }) => {
  const [hoverState, sethoverState] = useState(false);
  const [hoverValue, sethoverValue] = useState("");
  const [userData, setuserData] = useState({});
  const dataa = useSelector((state) => state.user.user);
  const { contacts } = useContactHook();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(user));
    setuserData(user);
  }, [dispatch]);

  return (
    <div className="bg-white py-10 px-3 mt-20 rounded-lg">
      <div className="text  absolute top-5 right-10 flex items-center gap-5">
        <div className="t">
          You are online{" "}
          <span className="text w-1 h-1 rounded-full bg-green-500 p-1 absolute animate-pulse"></span>
        </div>
        <div className="text w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
          <FaUser className="text-xl text-white" />
        </div>
      </div>
      <div className="w-full border-b">
        <div className="text ml-10 text-3xl mb-3">
          Contacts ({contacts.length})
        </div>
        <table className="w-full table-fixed">
          <thead>
            <tr className="flex justify-between  px-10">
              <th className="text-left py-2 w-[30%]">Name</th>
              <th className="text-left py-2 w-[30%]">Email</th>
              <th className="text-left py-2 w-[30%]">Phone number</th>
              <th className="text-left py-2 w-[9%]">Actions</th>
            </tr>
          </thead>
        </table>
      </div>

      <ScrollArea className="h-[90vh] w-full">
        <table className="w-full">
          <tbody>
            {contacts.length > 0 &&
              contacts.map((value, index) => (
                <tr
                  key={index}
                  onMouseOut={() => {
                    sethoverState(false);
                    sethoverValue("");
                  }}
                  onMouseOver={() => {
                    sethoverState(true);
                    sethoverValue(value._id);
                  }}
                  className="flex justify-between px-5 py-3 hover:bg-sky-50 hover:font-semibold"
                >
                  <td className="py-2 px-3 w-w-[30%]">
                    {value.firstName + " " + value.lastName}
                  </td>
                  <td className="py-2 px-3 w-w-[30%]">{value.email}</td>
                  <td className="py-2 px-3 w-w-[30%]">{value.phoneNumber}</td>
                  <td className="py-2 px-3 w-1/8 flex gap-3 items-center">
                    <ContactDialog
                      mode="edit"
                      value={value}
                      hoverValue={hoverValue}
                    />
                    <ContactDeleteDialog
                      mode=""
                      value={value}
                      hoverValue={hoverValue}
                    />
                    <ContactDetailsDialog
                      mode=""
                      value={value}
                      hoverValue={hoverValue}
                    />
                  </td>
                </tr>
              ))}
            {contacts.length === 0 && (
              <div className="text flex min-h-[70vh] w-full justify-center items-center">
                <div className="text-center">
                  <img src={img} alt="" className="text mx-auto" />
                  <p className="text-xl font-semibold">No contact yet! </p>
                  <p className="text">
                    You can add new contact by clicking on the{" "}
                    <span className="text-sky-500 font-semibold italic">
                      Create contact
                    </span>{" "}
                    button above.
                  </p>
                </div>
              </div>
            )}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
};

export default ContactListPage;
