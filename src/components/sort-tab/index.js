import React, { useState } from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

const Sort = () => {
  const router = useRouter();

  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortOptions = [
    { label: "Latest", id: "newest" },
    { label: "Most visited", id: "most" },
    { label: "Most popular", id: "popular" },
  ];

  const renderSortOptions = () => {
    return sortOptions.map(({ label, id }) => (
      <li
        onClick={() => handleClick(id)}
        key={id}
        className={`py-3 relative hover:text-purple-500 cursor-pointer ${
          sort === id ? "text-purple-500 font-medium" : "text-gray-700"
        } `}
      >
        {label}

        {sort === id && (
          <span className='h-[3px] absolute  left-0 bottom-0 bg-purple-500 rounded-full w-10'></span>
        )}
      </li>
    ));
  };

  const handleClick = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };

  return (
    <div className='flex gap-4 px-4 py-1 bg-white shadow-lg shadow-gray-200 rounded-2xl'>
      <div className='flex items-center gap-2'>
        <AdjustmentsIcon className='w-6 h-6 stroke-purple-400' />
        <span className='text-gray-600'>Sort by : </span>
      </div>
      <ul className='flex items-center gap-8'>{renderSortOptions()}</ul>
    </div>
  );
};

export default Sort;
