import React from "react";
import FriendRequests from "./FriendRequests";
import Ad from "./Ad";
import BirthDays from "./BirthDays";
import UserinfoCard from "./UserinfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <aside className="hidden lg:block w-[30%]">
      <div className="flex flex-col gap-6">
        {userId ? (
          <>
            <UserinfoCard userId={userId} />
            <UserMediaCard userId={userId} />
          </>
        ) : null}
        <FriendRequests />
        <BirthDays />
        <Ad size="md" />
      </div>
    </aside>
  );
};

export default RightMenu;
