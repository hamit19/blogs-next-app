import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='sticky top-0 left-0 right-0 z-50 flex justify-between w-full px-10 py-4 bg-white shadow-md'>
      <ul className='flex justify-around gap-4 px-2 '>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/blogs'>Blogs</Link>
        </li>
      </ul>
      <div className='text-sm font-medium '>
        <Link href='/auth'>Sign Up/Sing In</Link>
        {/* <Link href='/profile'>Profile</Link> */}
      </div>
    </header>
  );
};

export default Header;
