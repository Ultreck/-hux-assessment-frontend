import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/shdcn/ui/ui/input";
import { Button } from "../components/shdcn/ui/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/shdcn/ui/ui/form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import httpClient from "../http/httpClient";
import { setUser } from "../redux/userSlice";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "password is required" }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputType, setInputType] = useState(true);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    // console.log(data);
    httpClient
      .post(`/auth/login`, data)
      .then((response) => {
        if (response.data.isSuccess) {
          setIsSuccess(response.data.isSuccess);
          setMessage(response.data.message);
          setIsLoading(false);
          
          toast.success(response.data.message);
          dispatch(login(response.data.data));
          dispatch(setUser(response?.data?.data));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/contacts");
          // window.location.reload();
        } else {
          setIsLoading(false);
          setMessage(response.data.message);
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        setMessage("User not found");
        toast.error("Incorrect password");
        setIsLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
      <div className="txt flex justify-center items-center sm:px-20 lg:px-0">
        <div className="grid w-full relative items-center gap-1.5 bg-white shadow-lg rounded-lg py-10">
          {message && (
            <p
              className={`border text-center py-2 absolute top-0 w-full mb-5 ${
                isSuccess
                  ? "bg-green-50 text-green-500"
                  : "bg-red-50 text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6  w-full px-10"
            >
              {/* <h1 className="text-xl font-semibold">Login</h1> */}
              <FormField
                className="w-full"
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} className=" h-16" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                className="w-full"
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="text flex relative items-center">
                        <Input
                          placeholder="password"
                          {...field}
                          className=" h-16"
                          type={inputType ? "password" : "text"}
                        />
                        {inputType ? (
                          <button
                            onClick={() => setInputType(!inputType)}
                            className="text absolute right-5 z-30"
                          >
                            <FiEyeOff />
                          </button>
                        ) : (
                          <button
                            onClick={() => setInputType(!inputType)}
                            className="text absolute right-5 z-30"
                          >
                            <FiEye />
                          </button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className={`w-full h-16 ${
                  isLoading ? "bg-sky-400" : "bg-sky-500"
                }`}
                type="submit"
                variant=""
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
