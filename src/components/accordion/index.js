import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' rounded-2xl bg-white  overflow-hidden select-none '>
      {/* accordion header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=' flex justify-between p-4 cursor-pointer'
      >
        <span>Blogs Categories</span>
        <ChevronDownIcon
          className={`w-6 h-6  ${
            isOpen ? "" : "rotate-180"
          }  custom-transition stroke-purple-400`}
        />
      </div>
      {/* accordion content */}
      <div
        className={` h-0  custom-transition ${
          !isOpen ? "h-0 hidden" : " block h-auto"
        }`}
      >
        <Link
          href='/'
          className='block  pl-6 py-3   hover:bg-purple-100  custom-transition px-3 '
        >
          All
        </Link>
        <Link
          href='/'
          className='block  pl-6 py-3  hover:bg-purple-100  custom-transition px-3 '
        >
          React
        </Link>
        <Link
          href='/'
          className='block  pl-6 py-3 hover:bg-purple-100  custom-transition px-3  '
        >
          javaScript
        </Link>
        <Link
          href='/'
          className='block  pl-6 py-3  hover:bg-purple-100  custom-transition px-3 '
        >
          Next js
        </Link>
      </div>
    </div>
  );
};

export default Accordion;
