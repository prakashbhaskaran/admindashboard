import React from "react";
import { users } from "../../Cards/Profile";
import Users from "../../Cards/Profile/Users";

const NotifyDrop = ({ notifyOpen }) => {
  return (
    <div
      className={`notify-drop absolute w-[95%] mx-auto lg:mx-0 lg:w-[420px] px-5 bg-white top-[72px] left-0 right-0 lg:left-auto lg:right-[100px] rounded-lg py-[17px] ${
        notifyOpen ? "flex" : "hidden"
      } flex-col gap-5 shadow-[0px_0px_8px_#5565751A]`}
    >
      {users.slice(0, 3).map((item, index) => {
        return (
          <Users
            key={index}
            image={item.image}
            time={item.time}
            name={item.name}
            noti={item.noti}
          />
        );
      })}
      <p className="border-t-[1px] text-center pt-4 text-[#3B86FF] text-sm">
        Show More
      </p>
    </div>
  );
};

export default NotifyDrop;
