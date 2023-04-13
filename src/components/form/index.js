import { useRouter } from "next/router";
import React, { useState } from "react";

const Form = ({ onSubmit, postId, responseTo, setIsOnReplay }) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e, value, setValue, postId, responseTo, router, setIsOnReplay);
      }}
      className='w-full py-4 '
    >
      <textarea
        className='w-full px-4 py-2 text-sm text-gray-700 border-2 border-gray-300 rounded-lg focus:shadow-md custom-transition outline-gray-700 hover:shadow-blue-500 outline-0 focus:border-blue-500'
        name='comment'
        placeholder='Leave your comment here...'
        cols='30'
        rows='4'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button
        type='submit'
        className='px-4 py-2 mt-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:shadow-lg hover:shadow-blue-200 hover:bg-blue-800 custom-transition '
      >
        Leave comment
      </button>
    </form>
  );
};

export default Form;
