import Image from "next/image";
import React from "react";
import Comments from "../Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/29725302/pexels-photo-29725302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt="image"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Alex Brend</span>
        </div>
        <Image
          src="/more.png"
          width={16}
          height={16}
          alt="more"
          className="cursor-pointer"
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt="more"
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
          eum unde. Saepe eveniet autem nulla deserunt cum maiores omnis quod.
          Quia et facilis asperiores cum? Voluptates quas tempora sapiente
          quidem deleniti quaerat impedit iusto ex, amet, atque voluptatum
          voluptate sit odit quis nam maiores. Sint maxime incidunt officia
          excepturi alias.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between test-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
