"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.authUser);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    }
  }, [user]);

  if (!user)
    return (
      <div className='flex items-center justify-center h-screen'>
        <ThreeCircles height={100} width={100} color={"gray"} />
      </div>
    );

  return (
    <div className='h-screen'>
      <div className='p-10'>
        <h6 className='text-xl font-medium text-gray-600'>
          Welcome to the the Blog Next app{" "}
          <span className='font-bold'>{`"${user?.name}"`}</span> 🙂
        </h6>
      </div>
    </div>
  );
};

export default UserProfile;
