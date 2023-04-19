import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostInteractions from "../postInteraction";

const PostList = ({ blogsData }) => {
  const renderPosts = () => {
    return blogsData.map((blog) => (
      <div
        key={blog._id}
        className='flex flex-col  shadow-lg shadow-gray-200 max-h-[380px] md:max-h-[330px] col-span-6 bg-white md:col-span-3 rounded-xl lg:col-span-2'
      >
        {/* blogs cover */}
        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
          <div className='relative rounded-2xl overflow-hidden pt-[56%]'>
            <Image
              fill={true}
              src={blog.coverImage}
              alt='blogs cover'
              className='absolute inset-0 object-cover object-center '
            />
          </div>
        </Link>

        {/* blogs content */}
        <div className='flex flex-col justify-between flex-1 w-full px-2 py-4'>
          {/* blogs title */}
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <h3 className='mb-4 font-bold'>
              {blog.title.length > 50
                ? `${blog.title.substr(0, 50)}...`
                : blog.title}
            </h3>
          </Link>
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
                <Link href={`/blogs/${blog.category.englishTitle}`}>
                  {blog.category.title}
                </Link>
              </span>
            </div>
            {/* actions */}
            <PostInteractions isSmall blog={blog} />
          </div>
        </div>
      </div>
    ));
  };

  return <>{renderPosts()}</>;
};

export default PostList;
