import React, { useState } from "react";
import {
  ChatAltIcon,
  HeartIcon,
  BookmarkIcon,
  ClockIcon,
} from "@heroicons/react/outline";

import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/solid";
import { useAuth } from "@/context/authContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const PostInteractions = ({ blog, isSmall, className }) => {
  const { user } = useAuth();

  const [interActions, setInterActions] = useState({
    isLiked: blog.isLiked,
    isBookmarked: blog.isBookmarked,
  });

  const handleLike = async () => {
    if (!user?._id) {
      toast.error("You must be logged in first!");
    }

    try {
      const { data } = await axios(
        `http://localhost:5000/api/posts/like/${blog._id}`,
        {
          method: "PUT",
          withCredentials: true,
        }
      );

      data.message === "Unliked!"
        ? setInterActions({ ...interActions, isLike: false })
        : setInterActions({ ...interActions, isLike: true });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex items-center justify-between w-full py-2 sm:justify-start'>
      <div
        className={`flex items-center ${className}  ${
          !isSmall ? "gap-x-6" : "gap-2"
        } `}
      >
        <button className='flex items-center justify-center h-6 gap-1 p-1 text-gray-600 rounded-md cursor-pointer w-11 bg-slate-200'>
          <ChatAltIcon className='w-4 h-4' />
          <span className='text-xs font-bold text-gray-500'>
            {blog.commentsCount}
          </span>
        </button>
        <button
          onClick={() => handleLike()}
          className='flex items-center justify-center h-6 gap-1 p-1 rounded-md cursor-pointer w-11 bg-rose-200 custom-transition hover:text-white hover:bg-rose-600 text-rose-600'
        >
          {!interActions.isLiked ? (
            <HeartIcon className='w-4 h-4' />
          ) : (
            <SolidHeartIcon className='w-4 h-4 ' />
          )}
          <span className='text-xs font-bold'>{blog.likesCount}</span>
        </button>
        <button className='w-6 h-6 p-1 text-blue-600 bg-blue-200 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white custom-transition'>
          {!blog.isBookmarked ? (
            <BookmarkIcon className='w-4 h-4 mr-2' />
          ) : (
            <SolidBookmarkIcon className='w-4 h-4 ' />
          )}
        </button>
      </div>
      {isSmall && (
        <div className='flex items-center justify-start w-1/2 gap-1 pl-2'>
          <ClockIcon className='w-4 h-4 stroke-gray-500 ' />
          <span className='text-xs font-medium text-gray-500'>
            {blog.readingTime}min read
          </span>
        </div>
      )}
    </div>
  );
};

export default PostInteractions;
