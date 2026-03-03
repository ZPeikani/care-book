import authPage from "@/assets/auth/doctor_appointment_app_img.png";
import logo from "@/assets/logo/darkblue.jpeg";
import { texts } from "@/constants/localization";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import Buttons from "@/components/shared/buttons/Buttons";
import { useForm } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  username: string;
  password: string;
  email: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex w-full">
        <div className="bg-thirdly w-full h-screen shadow-md shadow-gray-500 flex flex-row px-16 md:w-2/5">
          <div className="my-auto space-y-8 px-16">
            <Link href={"/"}>
              <div className="px-24">
                <img
                  src={logo.src}
                  alt="logo"
                  className="rounded shadow-sm shadow-gray-400"
                />
              </div>
            </Link>
            <div className="mt-4">
              <h1 className="font-bold text-2xl text-primary">
                {texts.signUp}
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
              <div>
                <label
                  className="block font-semibold mb-2 text-secondary"
                  htmlFor="username"
                >
                  {texts.userName}
                </label>
                <div className="relative">
                  <input
                    {...register("username", {
                      required: "لطفا نام کاربری خود را وارد کنید.",
                    })}
                    id="username"
                    type="text"
                    className={`shadow bg-white appearance-none rounded-sm w-full py-2 px-7 text-gray-700 leading-tight focus:shadow-outline focus:shadow-lg ${errors.username ? "focus:outline-red-500 focus:shadow-red-200" : "focus:outline-primary focus:shadow-[#7AAACE]"}`}
                  />
                  <div className="absolute inset-y-0 flex items-center pointer-events-none  peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <FaUser
                      className={`${errors.username ? "text-red-500" : "text-gray-400"} mr-2`}
                    />
                  </div>
                </div>
                <span className="text-red-500 text-xs">
                  {errors.username ? String(errors.username.message) : ""}
                </span>
              </div>
              <div>
                <label
                  className="block font-semibold mb-2 text-secondary"
                  htmlFor="username"
                >
                  {texts.password}
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "لطفا رمز عبور را وارد کنید.",
                      minLength: {
                        value: 8,
                        message: "رمز عبور باید حداقل 8 کاراکتر باشد",
                      },
                      maxLength: {
                        value: 15,
                        message: "رمز عبور باید حداکثر 15 کاراکتر باشد",
                      },
                    })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={`shadow bg-white appearance-none rounded-sm w-full py-2 px-7 text-gray-700 leading-tight focus:shadow-outline focus:shadow-lg ${errors.password ? "focus:outline-red-500 focus:shadow-red-200" : "focus:outline-primary focus:shadow-[#7AAACE]"}`}
                  />
                  <div className="absolute inset-y-0 flex items-center pointer-events-none  peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <FaLock
                      className={`${errors.password ? "text-red-500" : "text-gray-400"} mr-2`}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none absolute inset-y-0 start-0 flex items-center peer-disabled:opacity-50 peer-disabled:pointer-events-none cursor-pointer"
                  >
                    {showPassword ? (
                      <FaEye
                        className={`${errors.password ? "text-red-500" : "text-gray-400"} ml-2`}
                      />
                    ) : (
                      <FaEyeSlash
                        className={`${errors.password ? "text-red-500" : "text-gray-400"} ml-2`}
                      />
                    )}
                  </button>
                </div>
                <span className="text-red-500 text-xs">
                  {errors.password ? String(errors.password.message) : ""}
                </span>
              </div>
              <div>
                <label
                  className="block font-semibold mb-2 text-secondary"
                  htmlFor="username"
                >
                  {texts.email}
                </label>
                <div dir="ltr">
                  <input
                    {...register("email", {
                      required: "لطفا ایمیل خود را وارد کنید.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "فرمت ایمیل صحیح نیست.",
                      },
                    })}
                    id="email"
                    type="email"
                    className={`shadow bg-white appearance-none rounded-sm w-full py-2 px-7 text-gray-700 leading-tight focus:shadow-outline focus:shadow-lg ${errors.email ? "focus:outline-red-500 focus:shadow-red-200" : "focus:outline-primary focus:shadow-[#7AAACE]"}`}
                    placeholder="you@example.com"
                  />
                </div>
                <span className="text-red-500 text-xs">
                  {errors.email ? String(errors.email.message) : ""}
                </span>
              </div>
              <Buttons buttonText={texts.register} width="w-full" />
            </form>
            <div className="w-full text-center">
              <span>قبلا ثبت نام کرده اید؟</span>
              <Link
                href={"/auth?mode=sign-in"}
                className="text-blue-700 underline"
              >
                {" "}
                {texts.signIn}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={authPage.src} className="hidden md:block h-screen" />
        </div>
      </div>
    </>
  );
}
