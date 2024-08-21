import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/shdcn/ui/ui/dialog";
import { FaTrash } from "react-icons/fa6";
import httpClient from "../http/httpClient";
import { toast } from "react-toastify";

const ContactDeleteDialog = ({ mode, hoverValue, value }) => {
  //   useEffect(() => {
  //     console.log(value);
  //     httpClient
  //       .delete(`/delete-contact/${value._id}`)
  //       .then((Response) => {
  //         console.log(Response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [value]);

  const handleDelete = () => {
    httpClient
      .post(`/delete-contact/${value._id}`)
      .then((Response) => {
          window.location.reload();
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button
            title="Delete"
            className={`text hover:text-white hover:bg-red-500  ${
              hoverValue !== value._id && "invisible"
            } rounded-lg px-2 py-2 flex justify-center items-center`}
          >
            <FaTrash />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl px-5">Delete Contact</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid text-center items-center gap-4">
              Do you want to delete this?
            </div>
          </div>
          <DialogFooter>
            <div className=" items-center gap-4 text-end  justify-end">
              <button
                onClick={handleDelete}
                className="text bg-sky-500 px-7 py-1 rounded-lg text-white mx-5"
              >
                Yes
              </button>
              <DialogClose>
                <button className="text bg-red-500 px-7 py-1 rounded-lg text-white mx-5">
                  No
                </button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactDeleteDialog;
