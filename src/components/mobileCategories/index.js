import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MobileCategories = ({ postsCategories }) => {
  const { query } = useRouter();

  const renderCategories = () => {
    return postsCategories.map((category) => (
      <Link
        className={`px-5 py-1 text-gray-600 bg-white border rounded-full whitespace-nowrap border-slate-400  ${
          category.englishTitle === query.categorySlug
            ? " bg-purple-100 border-purple-700 text-purple-700 font-medium "
            : "bg-white "
        }`}
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
        className={`px-5 py-1 text-gray-600 bg-white border rounded-full whitespace-nowrap border-slate-400 ${
          !query.categorySlug
            ? " bg-purple-100 border-purple-700 text-purple-700 font-medium "
            : "bg-white "
        }`}
        href={`/blogs/`}
      >
        All
      </Link>
      {renderCategories()}
    </>
  );
};

export default MobileCategories;
