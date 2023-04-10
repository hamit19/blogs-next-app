import Head from "next/head";
import Accordion from "@/components/accordion";
import Sort from "@/components/sort-tab";
import axios from "axios";
import PostList from "@/components/posts";
import MobileCategories from "@/components/mobileCategories";
import queryString from "query-string";
import http from "@/services/httpServices";

export default function blogCategories({ blogsData, postsCategories }) {
  return (
    <>
      <Head>
        <title>Blogs | </title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=' bg-slate-50'>
        <div className='container mx-auto lg:max-w-screen-xl'>
          <div className='grid md:grid-cols-12 grid-rows-[70px_minmax(300px,_1fr)] gap-8 p-4 min-h-screen'>
            {/* desktop categories */}
            <div className='hidden md:block md:col-span-3 md:row-span-2'>
              <Accordion postsCategories={postsCategories} />
            </div>
            {/* mobile categories */}

            <div className='flex items-center justify-start gap-3 overflow-auto md:hidden'>
              <MobileCategories postsCategories={postsCategories} />
            </div>

            <div className='hidden md:block md:col-span-9 '>
              <Sort />
            </div>
            <div className='grid grid-cols-6 md:col-span-9 gap-y-6 gap-x-10'>
              <PostList blogsData={blogsData.docs} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query, req } = context;

  const { data: result } = await http.get(
    `/api/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );

  const { data: postsCategories } = await http.get(`/api/post-category`);

  const { data } = result;

  return {
    props: {
      blogsData: data,
      postsCategories: postsCategories.data,
    },
  };
}
