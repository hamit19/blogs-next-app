import { useAuth } from "@/context/authContext";
import React from "react";

const UserProfile = () => {
  const { user } = useAuth();

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
