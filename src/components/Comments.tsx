import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29884577/pexels-photo-29884577.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={32}
          width={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a commnet"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/29884577/pexels-photo-29884577.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Alex Brend</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              facere sint doloribus a, recusandae rerum deserunt excepturi
              libero veniam neque enim numquam voluptates pariatur distinctio
              sequi aliquid, ipsum non minima! Nam odio fugiat quis fuga,
              aliquam vitae, illum cupiditate eveniet maxime, eligendi
              reiciendis consequatur porro omnis sunt dignissimos repellat
              aliquid!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
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
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
