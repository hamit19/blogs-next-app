import Link from "next/link";
import React from "react";

const ProfileOptions = ({ options, isShow }) => {
  const renderOptions = () => {
    return options.map((item) => (
      <>
        {item.link ? (
          <Link href={item.action}>
            <div
              key={item.label}
              className='w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer hover:bg-gray-100 custom-transition'
            >
              <span>{item.label}</span>
            </div>
          </Link>
        ) : (
          <div
            key={item.label}
            className='w-full p-2 text-gray-500 bg-white rounded-lg cursor-pointer hover:bg-gray-100 custom-transition'
            onClick={() => item.action()}
          >
            <span>{item.label}</span>
          </div>
        )}
      </>
    ));
  };

  if (isShow)
    return (
      <div className='absolute right-0 z-50 flex flex-col w-32 gap-2 p-1 bg-white rounded-lg shadow-lg '>
        {renderOptions()}
      </div>
    );

  return;
};

export default ProfileOptions;
