import { BookmarkIcon } from "@heroicons/react/outline";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BookmarkIcon as SolidBookmarkIcon,
  LinkIcon,
} from "@heroicons/react/solid";

const Post = ({ postData }) => {
  return (
    <div className='container max-w-screen-lg m-auto'>
      <div className='h-full p-4'>
        {/* posts header */}

        <div className='relative flex flex-col sm:flex-row sm:justify-between'>
          {/* author info */}
          <div className='flex justify-between sm:justify-start'>
            <div className='flex'>
              <div className='relative w-16 h-16 overflow-hidden rounded-full '>
                <Image
                  className='object-cover object-center'
                  src={"/images/nextjs.png"}
                  alt="author's avatar"
                  fill={true}
                />
              </div>
              <div className='flex items-start pl-2 mt-1 '>
                <div className='flex flex-col mr-4'>
                  <span className='font-bold text-gray-500'>
                    {postData.author.name}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {postData.author.biography}
                  </span>
                  {/* release date and reading info of the post */}
                  <div className='flex items-center justify-center gap-2'>
                    <span className='text-xs text-gray-400'>
                      {new Date(postData.createdAt).toLocaleDateString("en-US")}
                    </span>
                    <span>&bull;</span>
                    <span className='text-xs text-gray-500'>
                      {postData.readingTime}min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* category and status info of the post */}
            <div className='flex flex-col gap-3 '>
              <span className='px-3 py-1 text-xs font-bold text-blue-500 bg-white border border-blue-300 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white custom-transition '>
                <Link href={`/blogs/${postData.category.englishTitle}`}>
                  {postData.category.title}
                </Link>
              </span>
              <div className='flex self-end gap-3 sm:hidden'>
                <div className='w-6 h-6 p-1 text-blue-600 bg-white rounded-md cursor-pointer hover:bg-blue-600 hover:text-white custom-transition'>
                  {!postData.isBookmarked ? (
                    <BookmarkIcon className='w-4 h-4 mr-2' />
                  ) : (
                    <SolidBookmarkIcon className='w-4 h-4 ' />
                  )}
                </div>
                <div className='w-6 h-6 p-1 text-blue-600 bg-white rounded-md cursor-pointer hover:bg-blue-600 hover:text-white custom-transition'>
                  <LinkIcon />
                </div>
              </div>
            </div>
          </div>

          {/* post status */}
          <div>
            <div className='hidden gap-3 sm:flex'>
              <div className='flex items-center justify-center w-16 h-6 gap-2 text-blue-600 bg-white rounded-md cursor-pointer hover:bg-blue-600 hover:text-white custom-transition'>
                {!postData.isBookmarked ? (
                  <>
                    <span className='mb-1'>save</span>
                    <BookmarkIcon className='w-4 h-4' />
                  </>
                ) : (
                  <>
                    <span className='mb-1'>saved</span>
                    <SolidBookmarkIcon className='w-4 h-4 ' />
                  </>
                )}
              </div>
              <div className='w-6 h-6 p-1 text-blue-600 bg-white rounded-md cursor-pointer hover:bg-blue-600 hover:text-white custom-transition'>
                <LinkIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { query } = context;

  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      postData: data,
    },
  };
}
