import React from "react";
import Users from "./Users";

export const users = [
  {
    name: "Drew James",
    country: "United States",
    time: "2 mins ago",
    noti: "Assigned you on the call with Sara",
    image: "/imgs/profile-pic-03.jpg",
    number: 8765784927,
  },
  {
    name: "David Kames",
    country: "United States",
    time: "2 mins ago",
    noti: "Marked the task New UI as done",
    image: "/imgs/profile-pic-02.jpg",
    number: 8765784927,
  },
  {
    name: "Lavid Emes",
    country: "United States",
    time: "2 mins ago",
    noti: "Added a new comment on Sales task",
    image: "/imgs/profile-pic-04.jpg",
    number: 8765784927,
  },
  {
    name: "Eva Maria",
    country: "United States",
    time: "2 mins ago",
    noti: "Added a new comment on Sales task",
    image: "/imgs/profile-pic-06.jpg",
    number: 8765784927,
  },
  {
    name: "Alexa Marry",
    country: "United States",
    time: "2 mins ago",
    noti: "Added a new comment on Sales task",
    image: "/imgs/profile-pic-05.jpg",
    number: 8765784927,
  },
];

const Profile = () => {
  return (
    <div className="profile bg-white px-5 py-10 min-w-[240px] rounded-[10px] order-1 lg:order-3 md:row-span-3">
      <div className="details text-center">
        <div className="w-24 h-24 m-auto rounded-full relative">
          <img
            src="/imgs/profile-pic-01.jpg"
            alt="Error"
            className="rounded-full object-cover"
          />
          <div className="absolute w-6 h-6 bg-[#6763E3] rounded-full bottom-[0px] right-[-5px] border-[1px] border-white">
            <div className="bg-edit ml-2 mt-2"></div>
          </div>
        </div>
        <p className="mt-4 text-[#4D4F5C] font-[600]">Nick Herasimenka</p>
        <p className="mt-[7px] text-sm text-[#43425D] text-opacity-[50%]">
          United States
        </p>
        <div className="mt-[17px] flex gap-4 justify-center">
          <div className="bg-twitter"></div>
          <div className="bg-fb"></div>
          <div className="bg-linkedin"></div>
          <div className="bg-whatsapp"></div>
        </div>
      </div>
      <div className="border-t-2 border-[#F0F4F7] mt-5 mb-8"></div>
      <div className="ourusers">
        <div className="flex justify-between">
          <p className="text-[#4D4F5C]">Our Users</p>
          <p className="bg-options" role="button"></p>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          {users.slice(0, 3).map((item, index) => {
            return (
              <Users
                key={index}
                image={item.image}
                number={item.number}
                name={item.name}
                country={item.country}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
