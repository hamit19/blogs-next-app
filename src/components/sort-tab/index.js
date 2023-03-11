import React from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

const Sort = () => {
  return (
    <div className='bg-white rounded-2xl py-1 px-4 flex gap-4'>
      <div className='flex items-center gap-2'>
        <AdjustmentsIcon className='w-6 h-6 stroke-purple-400' />
        <span className='text-gray-600'>Sort by : </span>
      </div>
      <ul className='flex gap-8 items-center'>
        <li className='cursor-pointer py-3 text-gray-700'> latest</li>
        <li className='cursor-pointer py-3 text-gray-700'> oldest</li>
        <li className='cursor-pointer py-3 text-gray-700'> most visited</li>
      </ul>
    </div>
  );
};

export default Sort;
