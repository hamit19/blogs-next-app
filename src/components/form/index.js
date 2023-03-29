import React from "react";

const Form = ({ value, setValue, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
      className='w-full py-4 '
    >
      <textarea
        className='w-full border-2 text-sm focus:shadow-md custom-transition outline-gray-700 hover:shadow-blue-500 border-gray-300 px-4 py-2 outline-0 focus:border-blue-500 text-gray-700  rounded-lg'
        name='comment'
        placeholder='Leave your comment here...'
        cols='30'
        rows='4'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button
        type='submit'
        className='px-4 py-2 bg-blue-600 mt-3 rounded-md hover:shadow-lg hover:shadow-blue-200  hover:bg-blue-800 custom-transition text-sm  text-white font-medium '
      >
        Leave comment
      </button>
    </form>
  );
};

export default Form;
