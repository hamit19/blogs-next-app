import { useAuth, useAuthActions } from "@/context/authContext";
import { UserCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import ProfileOptions from "./ProfileOptions";
import Router from "next/router";

const Header = ({ isShow, setIsShow }) => {
  const { user, loading } = useAuth();

  const dispatch = useAuthActions();

  const options = [
    {
      label: "Profile",
      action: "/profile",
      link: true,
    },
    {
      label: "Sign out",
      action: () => dispatch({ type: "LOGOUT" }),
      link: false,
    },
  ];

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
      <div
        className={`text-sm font-medium custom-transition ${
          loading ? "opacity-0" : "opacity-100"
        } `}
      >
        {!user?._id ? (
          <Link href='/auth'>Sign Up/Sing In</Link>
        ) : (
          <div
            className='relative '
            onClick={(e) => {
              e.stopPropagation();
              setIsShow(!isShow);
            }}
          >
            <UserCircleIcon
              className='cursor-pointer stroke-gray-500'
              with={30}
              height={30}
            />
            <ProfileOptions options={options} isShow={isShow} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
