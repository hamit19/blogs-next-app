import React from "react";
import Image from "next/image";
import {
  ChatAltIcon,
  HeartIcon,
  BookmarkIcon,
  ClockIcon,
} from "@heroicons/react/outline";

// import { HeartIcon } from "@heroicons/react/solid";

const PostList = ({ blogsData }) => {
  const renderPosts = () => {
    return blogsData.docs.map((blog) => (
      <div
        className='flex flex-col col-span-6 bg-white md:col-span-3 rounded-xl lg:col-span-2'
        key={blog._id}
      >
        {/* blogs cover */}
        <div className='relative rounded-2xl overflow-hidden pt-[56%]'>
          <Image
            fill={true}
            src={blog.coverImage}
            alt='blogs cover'
            className='absolute inset-0 object-cover object-center '
          />
        </div>

        {/* blogs content */}
        <div className='flex flex-col justify-between flex-1 w-full px-2 py-4'>
          {/* blogs title */}
          <h3 className='mb-4 font-bold'>
            {blog.title.length > 50
              ? `${blog.title.substr(0, 50)}...`
              : blog.title}
          </h3>
          {/* blogs data */}
          <div className='flex flex-col gap-3'>
            {/* author info */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-start gap-2 py-2 text-sm'>
                {/* avatar */}
                <div className='relative w-6 h-6 overflow-hidden rounded-full ring-2 ring-slate-100'>
                  <Image
                    src={"/images/vuejs.png"}
                    alt='avatar'
                    fill={true}
                    className='absolute inset-0 object-cover object-center'
                  />
                </div>
                <span className='text-xs font-bold text-gray-500'>
                  {blog.author.name}
                </span>
              </div>
              <span className='px-3 py-1 text-xs font-bold text-blue-500 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white custom-transition '>
                {blog.category.title}
              </span>
            </div>
            {/* actions */}
            <div className='flex items-center justify-between py-2 sm:justify-start '>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center h-6 gap-1 p-1 text-gray-600 rounded-md cursor-pointer w-11 bg-slate-200'>
                  <ChatAltIcon className='w-4 h-4' />
                  <span className='text-xs font-bold text-gray-500'>
                    {blog.commentsCount}
                  </span>
                </div>
                <div className='flex items-center justify-center h-6 gap-1 p-1 rounded-md cursor-pointer w-11 bg-rose-200 custom-transition hover:text-white hover:bg-rose-600 text-rose-600'>
                  {!blog.isLiked ? (
                    <HeartIcon className='w-4 h-4' />
                  ) : (
                    <HeartIcon className='w-4 h-4 ' />
                  )}
                  <span className='text-xs font-bold'>{blog.likesCount}</span>
                </div>
                <div className='w-6 h-6 p-1 text-blue-600 bg-blue-200 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white custom-transition'>
                  <BookmarkIcon className='w-4 h-4 mr-2' />
                </div>
              </div>
              <div className='flex items-center justify-start w-1/2 gap-1 pl-2'>
                <ClockIcon className='w-4 h-4 stroke-gray-500 ' />
                <span className='text-xs font-medium text-gray-500'>
                  {blog.readingTime}min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return <>{renderPosts()}</>;
};

export default PostList;
