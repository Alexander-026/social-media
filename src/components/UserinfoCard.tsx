import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserinfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
              Alex Brend
          </span>
          <span className="text-sm">@brend</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, facilis!</p>
        <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>
              Living in <b>Baku</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>
              Went to <b>N94</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>
              Works at <b>Tatos</b>
            </span>
          </div>
        <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link href={"/"} className="text-blue-500 font-medium">
              tatossoft
              </Link>
            </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined 25.12.2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white rounded-md text-sm p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

export default UserinfoCard;
