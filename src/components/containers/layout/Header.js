import { UserCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import ProfileOptions from "./ProfileOptions";
import { useDispatch, useSelector } from "react-redux";
import { userSinOutMiddleware } from "src/redux/userAuth/usersMiddlewares";

const Header = ({ isShow, setIsShow }) => {
  const { user, loading } = useSelector((state) => state.authUser);

  const dispatch = useDispatch();

  const options = [
    {
      label: "Profile",
      action: "/profile",
      link: true,
    },
    {
      label: "Sign out",
      action: () => dispatch(userSinOutMiddleware()),
      link: false,
    },
  ];

  return (
    <header className='sticky top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-10 bg-white shadow-md'>
      <ul className='flex justify-around gap-4 px-2 '>
        <li className='py-4'>
          <Link className='py-4' href='/'>
            Home
          </Link>
        </li>
        <li className='py-4'>
          <Link className='py-4' href='/blogs'>
            Blogs
          </Link>
        </li>
      </ul>
      <div
        className={`text-sm py-4 font-medium custom-transition ${
          loading ? "opacity-0" : "opacity-100"
        } `}
      >
        {!user?._id ? (
          <Link className='py-4' href='/auth'>
            Sign Up/Sing In
          </Link>
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
