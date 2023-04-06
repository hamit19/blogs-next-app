import InputComponent from "@/components/inputComponent";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const SignUpInitialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const SignInInitialValues = {
  email: "",
  password: "",
};

const SignUpValidationSchema = Yup.object({
  fullName: Yup.string().required("full name is required!"),
  email: Yup.string().email("email is invalid!").required("email is required!"),
  phoneNumber: Yup.string()
    .required("Phone number is required!")
    .matches(/^[0-9]{11}$/, "phone number is invalid!"),
  password: Yup.string()
    .required("password is required!")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "password must be contained at least one digit, one uppercase letter and one special sign!"
    ),
});

const SignInValidationSchema = Yup.object({
  email: Yup.string().email("email is invalid!").required("email is required!"),
  password: Yup.string().required("password is required!"),
});

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const formik = useFormik({
    initialValues: !isSignUp ? SignInInitialValues : SignUpInitialValues,
    validationSchema: isSignUp
      ? SignUpValidationSchema
      : SignInValidationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    setIsSignUp(!isSignUp);
    formik.resetForm();
  };

  console.log(formik);

  const renderAuthForm = () => {
    return (
      <form
        className='w-3/4  sm:w-[430px] h-min-3/4 relative lg:right-72 top-1/2  -translate-y-1/2 px-6 py-6 mx-auto flex flex-col gap-4 bg-white rounded-3xl shadow-xl'
        onSubmit={handleSubmit}
      >
        {isSignUp && (
          <InputComponent
            key={"fullName"}
            label='Name'
            placeholder={"for example: (John Smith)"}
            formik={formik}
            name='fullName'
          />
        )}

        <InputComponent
          key={"email"}
          label='Email'
          placeholder={"for example: (example@gmail.com)"}
          formik={formik}
          name='email'
          type='email'
        />
        {isSignUp && (
          <InputComponent
            key={"phoneNumber"}
            label='Phone Number'
            placeholder={"for example: (09120000000)"}
            formik={formik}
            name='phoneNumber'
          />
        )}
        <InputComponent
          key={"password"}
          label='Password'
          placeholder={"for example: (Hdeieq$1983)"}
          formik={formik}
          name='password'
          type='password'
        />

        <button
          type='submit'
          className='py-3 text-sm font-medium text-white bg-indigo-400 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-indigo-500 hover:shadow-xl custom-transition'
          disabled={!formik.isValid}
        >
          {" "}
          {isSignUp ? "Sign Up" : "Sign In"}{" "}
        </button>

        {isSignUp ? (
          <span className='text-xs font-medium text-center text-gray-500 '>
            Already have an account?{" "}
            <span
              className='font-bold text-indigo-500 cursor-pointer'
              onClick={() => handleChange()}
            >
              Sign In
            </span>{" "}
          </span>
        ) : (
          <span className='text-xs font-medium text-center text-gray-500 '>
            Have not had an account?{" "}
            <span
              className='font-bold text-indigo-500 cursor-pointer'
              onClick={() => handleChange()}
            >
              Sign Up
            </span>
          </span>
        )}
      </form>
    );
  };

  return (
    <div className='grid h-[90vh] lg:grid-cols-6'>
      <div className='relative hidden col-span-3 rounded-r-[60px] shadow-2xl lg:flex lg:items-center lg:justify-start xl:justify-center bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500'>
        <div className='ml-16 xl:m-0'>
          <h1 className='mb-5 text-6xl font-extrabold text-gray-50 font-custom-font'>
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          <Image
            src={"/images/auth.png"}
            alt={"auth vector"}
            width={400}
            height={400}
            className='hidden xl:block'
          />
          <Image
            src={"/images/auth.png"}
            alt={"auth vector"}
            width={300}
            height={300}
            className='hidden lg:block xl:hidden'
          />
        </div>
      </div>
      <div className='col-span-3'>{renderAuthForm()}</div>
    </div>
  );
};

export default Auth;