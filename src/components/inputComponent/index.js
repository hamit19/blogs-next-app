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
      <div className='flex items-center justify-between pr-2'>
        <label className='text-sm font-medium text-gray-400 ' htmlFor={name}>
          {label}
        </label>
        {formik.errors[name] && formik.touched[name] && (
          <span className='text-xs font-medium text-rose-400 '>
            *{formik.errors[name]}
          </span>
        )}
      </div>

      <input
        className={`px-2 py-3  ${
          formik.errors[name] && formik.touched[name]
            ? "focus:border focus:bg-white focus:border-rose-500 "
            : "focus:border focus:bg-white focus:border-indigo-500 "
        } text-gray-500 bg-slate-50  rounded-xl focus:shadow-lg custom-transition  focus:outline-0 txt-sm placeholder:text-gray-300 placeholder:text-xs`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
    </div>
  );
};

export default InputComponent;
