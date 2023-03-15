import Link from "next/link";
import React from "react";

const MobileCategories = ({ postsCategories }) => {
  const renderCategories = () => {
    return postsCategories.map((category) => (
      <Link
        className='px-5 py-1 text-gray-600 bg-white border rounded-full whitespace-nowrap border-slate-400 '
        href={`/blogs/${category.englishTitle}`}
        key={category._id}
      >
        {category.title}
      </Link>
    ));
  };

  return (
    <>
      <Link
        className='px-5 py-1 text-gray-600 bg-white border rounded-full whitespace-nowrap border-slate-400 '
        href={`/blogs/`}
      >
        All
      </Link>
      {renderCategories()}
    </>
  );
};

export default MobileCategories;
