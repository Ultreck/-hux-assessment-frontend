import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/shdcn/ui/ui/input";
import { Button } from "../components/shdcn/ui/ui/button";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/shdcn/ui/ui/form";
import httpClient from "../http/httpClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { setUser } from "../redux/userSlice";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "password is required" }),
});

const SignUp = () => {
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
    httpClient
      .post(`/auth/register`, data)
      .then((response) => {
        console.log(response);
        
        if (response.data.isSuccess) {
          dispatch(login(response.data.data));
          dispatch(setUser(response?.data?.data));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/contacts/dashboard");
          // window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
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
              {/* <h1 className="text-xl font-semibold">Sign Up</h1> */}
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
              <Button className="w-full bg-sky-500" type="submit" variant="">
                Register
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
