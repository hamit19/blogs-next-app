import toLocalDate from "@/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Form from "../form";

const SingleComment = ({ comment }) => {
  const [isOnReplay, setIsOnReplay] = useState(false);
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
    setIsOnReplay(false);
  };

  return (
    <div className='w-full my-2 shadow-md shadow-slate-100 bg-white rounded-lg p-4 '>
      {/* user info */}
      <div className='flex gap-2 items-center'>
        <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center border'>
          <UserIcon className='w-5 h-5 stroke-gray-600 ' />
        </div>
        <div className='flex flex-col text-xs text-gray-600'>
          <span>{comment.writer?.name}</span>
          <span>{toLocalDate(comment.createdAt)}</span>
        </div>
      </div>
      {/* comment content */}
      <div className='p-3 text-gray-600 '>
        <p>{comment.content}</p>
      </div>
      <div
        className='text-xs  w-11 cursor-pointer select-none text-gray-500 font-medium'
        onClick={() => setIsOnReplay(!isOnReplay)}
      >
        {!isOnReplay ? (
          <span className='text-blue-400'>Reply?</span>
        ) : (
          <span className='text-rose-400'>Discard!</span>
        )}
      </div>
      {isOnReplay && (
        <div>
          <span className='text-xs font-medium text-gray-400'>
            Replaying to{" "}
            <span className='text-gray-500'>{comment.writer?.name}</span>{" "}
          </span>
          <Form value={value} setValue={setValue} onSubmit={onSubmitHandler} />
        </div>
      )}
    </div>
  );
};

export default SingleComment;
