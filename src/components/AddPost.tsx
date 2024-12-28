import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const AddPost = async () => {
  const { userId } = await auth();

  console.log("userId", userId);

  
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4  justify-between  text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/29894015/pexels-photo-29894015.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="image"
        width={48}
        height={48}
        className="w-12 h-12 object-cover  rounded-full"
      />
      {/* POST */}
      <div className=" flex-1">
        {/* TEXT INPUT */}
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What's on your mind"
            // rows={2}
            name="desc"
            className="bg-slate-100 p-2 flex-1 rounded-lg"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="image"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>
        {/* POST OPTIONS*/}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2">
            <Image
              src="/addimage.png"
              alt="Photo"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Photo
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/addvideo.png"
              alt="Video"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Video
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/addevent.png"
              alt="Event"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Event
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/poll.png"
              alt="Poll"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
