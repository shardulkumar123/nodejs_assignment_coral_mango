import React from "react";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit(async (data) => {
    if (data) {
      // console.log(data)
      const res = await fetch("http://localhost:8000/admin-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("res", res);
      const resData = await res.json();
      if (res.status === 200) {
        router.push("/login");
      }
    }
  });

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center bg-gray-800  w-full">
        <div className="w-full  max-w-sm my-32 p-8 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-gray-800">
          <form className="space-y-6 my-4 " onSubmit={onSubmit}>
            <h5 className="text-xl font-medium  text-white">
              Sign Up Admin Account
            </h5>
            <div>
              <input
                type="username"
                id="username"
                className=" border   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="username"
                {...register("username")}
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <input
                type="email"
                id="email"
                className=" border   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                placeholder="name@company.com"
                {...register("email")}
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-600  border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white"
                {...register("password")}
                required
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="flex items-start">
              <Link
                href="/login"
                className="ml-auto text-sm hover:underline text-blue-500"
              >
                already have an account?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default login;
