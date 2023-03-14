import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Accordion = ({ postsCategories }) => {
  const [isOpen, setIsOpen] = useState(true);

  const renderCategories = () => {
    return postsCategories.map((category) => (
      <Link
        key={category._id}
        href={`/blogs/${category.englishTitle}`}
        className='block  pl-6 py-3  hover:bg-purple-100  custom-transition px-3 '
      >
        {category.title}
      </Link>
    ));
  };

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
          href='/blogs'
          className='block  pl-6 py-3   hover:bg-purple-100  custom-transition px-3 '
        >
          All
        </Link>
        {renderCategories()}
      </div>
    </div>
  );
};

export default Accordion;
