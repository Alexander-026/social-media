import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <article className="p-4 bg-white rounded-lg shadow-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-grap-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/*  USER */}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/29433057/pexels-photo-29433057.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="img"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Alex Brend</span>
        </div>
        <div className="flex  items-center gap-2">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/29433057/pexels-photo-29433057.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="img"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Alex Brend</span>
        </div>
        <div className="flex  items-center gap-2">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/29433057/pexels-photo-29433057.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="img"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Alex Brend</span>
        </div>
        <div className="flex  items-center gap-2">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </article>
  );
};

export default FriendRequests;