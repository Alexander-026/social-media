import Feed from "@/components/Feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-6 py-6">
     
      <LeftMenu type="profile" />
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={"/noCover.png"}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={"/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
                Alex Brend
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">26</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">26</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">26</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <RightMenu  />
    </div>
  );
};

export default Profile;
