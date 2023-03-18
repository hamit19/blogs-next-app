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
  console.log(postData);
  return (
    <div className='container max-w-screen-lg m-auto'>
      {/* posts header */}
      <header className='p-4'>
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
      </header>
      <article className='w-full p-8 prose prose-p:font-medium prose-p:text-base lg:prose-h2:text-2xl prose-headings:text-xl md:prose-headings:text-2xl prose-img:m-0 prose-img:object-cover prose-img:object-center lg:prose-headings:text-3xl prose-img:absolute prose-img:inset-0'>
        <h1>{postData.title}</h1>
        <h2>1. This is a testing heading!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quia, perspiciatis iste libero minus adipisci consequuntur sequi hic
          modi, blanditiis facere mollitia, id consectetur! Facere odit quos
          reiciendis blanditiis inventore?
        </p>

        <h2>2. This is a testing heading!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quia, perspiciatis iste libero minus adipisci consequuntur sequi hic
          modi, blanditiis facere mollitia, id consectetur! Facere odit quos
          reiciendis blanditiis inventore? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi quia, perspiciatis iste libero
          minus adipisci consequuntur sequi hic modi, blanditiis facere
          mollitia, id consectetur! Facere odit quos reiciendis blanditiis
          inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi quia, perspiciatis iste libero minus adipisci consequuntur
          sequi hic modi, blanditiis facere mollitia, id consectetur! Facere
          odit quos reiciendis blanditiis inventore?
        </p>

        <div className='overflow-hidden bg-red-100 aspect-w-16 aspect-h-8 rounded-xl '>
          <img src={postData.coverImage} fill={true} alt='posts cover' />
        </div>

        <h2>3. This is a testing heading!</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          quisquam voluptatum! Earum id quae quidem tempore assumenda impedit
          sapiente animi odit soluta odio, velit, quas rem quo obcaecati dolore
          laboriosam
          <code>tailwind.config.js</code>
        </p>
        <pre>
          {`
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: { extend: {} },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
    ],
  };`}
        </pre>
      </article>
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
