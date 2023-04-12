import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const Accordion = ({ postsCategories }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { query } = useRouter();

  const renderCategories = () => {
    return postsCategories.map((category) => (
      <Link
        key={category._id}
        href={`/blogs/${category.englishTitle}`}
        className={`block px-3  py-3 pl-6 hover:bg-purple-100 rounded-lg custom-transition ${
          category.englishTitle === query.categorySlug
            ? " bg-purple-500 hover:bg-purple-400 text-white"
            : "bg-white "
        }`}
      >
        {category.title}
      </Link>
    ));
  };

  return (
    <div className='sticky overflow-hidden bg-white select-none top-20 rounded-2xl'>
      {/* accordion header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex justify-between p-4 cursor-pointer '
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
        className={` h-0 px-1 flex gap-1 flex-col custom-transition ${
          !isOpen ? "h-0 hidden" : " block h-auto"
        }`}
      >
        <Link
          href='/blogs'
          className={`block px-3 py-3 pl-6 rounded-lg hover:bg-purple-100 custom-transition  ${
            !query.categorySlug
              ? " bg-purple-500 hover:bg-purple-400 text-white"
              : "bg-white "
          } `}
        >
          All
        </Link>
        {renderCategories()}
      </div>
    </div>
  );
};

export default Accordion;
