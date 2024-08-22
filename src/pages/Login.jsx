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

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "password is required" }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
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
    console.log(data);
    httpClient
    .post(`/auth/login`, data)
    .then((response) => {
      if (response.data.isSuccess) {
          setIsLoading(false);
          dispatch(login(response.data.data));
          dispatch(setUser(response?.data?.data));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/contacts");
          // window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="txt flex justify-center items-center sm:px-20 lg:px-0">
        <div className="grid w-full  items-center gap-1.5 bg-white shadow-lg rounded-lg py-10">
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
                      <Input placeholder="email" {...field} className="" />
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
                      <Input
                        placeholder="password"
                        {...field}
                        className=""
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button className={`w-full  ${isLoading? "bg-sky-400": "bg-sky-500"}`} type="submit" variant="">
                {isLoading? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
