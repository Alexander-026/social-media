import React, { Suspense } from "react";
import FriendRequests from "./FriendRequests";
import Ad from "../Ad";
import BirthDays from "./BirthDays";
import UserinfoCard from "./UserinfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <aside className="hidden lg:block w-[30%]">
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <Suspense fallback={"Loading..."}>
              <UserinfoCard user={user} />
            </Suspense>
            <Suspense fallback={"Loading..."}>
              <UserMediaCard user={user} />
            </Suspense>
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
