import Link from "next/link";
import React from "react";

const MobileCategories = ({ postsCategories }) => {
  const renderCategories = () => {
    return postsCategories.map((category) => (
      <Link
        className='px-5 text-gray-600 py-1 whitespace-nowrap bg-white border border-slate-400 rounded-full '
        href={`/blogs/${category.englishTitle}`}
        key={category._id}
      >
        {category.title}
      </Link>
    ));
  };

  return <>{renderCategories()}</>;
};

export default MobileCategories;
