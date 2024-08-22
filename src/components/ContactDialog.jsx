import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/shdcn/ui/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/shdcn/ui/ui/form";
import { MdEdit } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/shdcn/ui/ui/input";
import { Button } from "../components/shdcn/ui/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSelector } from "react-redux";
import httpClient from "../http/httpClient";
import { toast } from "react-toastify";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
});

const ContactDialog = ({ mode, hoverValue, value }) => {
  const state = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    if (mode === "edit") {
      form.setValue("firstName", value.firstName);
      form.setValue("lastName", value.lastName);
      form.setValue("phoneNumber", value.phoneNumber);
    }
  }, [mode]);

  const onSubmit = (data) => {
    setIsLoading(true);
    const payload = { ...data, email: state.email, userId: state._id };
    const urlDeterminant =
    mode === "edit"
    ? httpClient.put(`/edit-contact`, {payload, id:value._id})
    : httpClient.post(`/create-contact`, payload);
    
    urlDeterminant
    .then((response) => {
        console.log(response.data.message);
        setIsLoading(false);
        toast.success(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {mode === "edit" ? (
            <button title="Edit"
              className={`text hover:border ${
                hoverValue !== value._id && "invisible"
              } border-sky-500 rounded-lg px-2 py-1 flex justify-center items-center hover:text-white hover:bg-sky-500 `}
            >
              <MdEdit className="text-2xl" />
            </button>
          ) : (
            <div title="Create Contact" className="text-xl bg-sky-100 md:w-full md:h-20 h-10 w-10 rounded-full mt-20 md:px-5">
              <button className="text w-full h-full flex justify-evenly items-center">
                <span className="te">
                  <FaPlus />
                </span>
                <span className="lg:text-xl hidden lg:block">Create Contact</span>
              </button>
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl px-5">
              {mode === "edit" ? "Edit Contact" : "Add new Contact"}
            </DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7  w-full px-5"
              >
                {/* <h1 className="text-xl font-semibold">Login</h1> */}
                <FormField
                  className="w-full"
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="first name"
                          {...field}
                           className=" h-16"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  className="w-full"
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="last name"
                          {...field}
                         className=" h-16"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  className="w-full"
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="phone number"
                          {...field}
                          className=" h-16"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {mode === "add"? 
                <Button className={`w-full h-16  ${isLoading? "bg-sky-400": "bg-sky-500"}`} type="submit" variant="">
                {isLoading? "Submitting..." : "Submit"}

              </Button>
                :
                <Button className={`w-full h-16  ${isLoading? "bg-sky-400": "bg-sky-500"}`} type="submit" variant="">
                {isLoading? "Updating..." : "Update"}

              </Button>
                }
              </form>
            </Form>
            {/* <DialogDescription>
              Make changes to your profile here. Click save
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactDialog;
