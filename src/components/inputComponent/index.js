import React from "react";

const InputComponent = ({
  label,
  name,
  formik,
  type = "text",
  placeholder,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-xs font-medium text-gray-500 ' htmlFor={name}>
        {label}
      </label>
      <input
        className={`p-2 font-medium ${
          formik.errors[name] && formik.touched[name]
            ? "border-rose-300 focus:border-rose-500 "
            : "border-indigo-300 focus:border-indigo-500 "
        } text-gray-500 bg-white border-2  rounded-md focus:shadow-lg custom-transition  focus:outline-0 txt-sm placeholder:text-xs`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className='text-xs font-medium text-rose-500 '>
          *{formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
