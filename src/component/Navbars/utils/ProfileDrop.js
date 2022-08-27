import React from "react";

const ProfileDrop = ({ infoOpen }) => {
  return (
    <div
      className={`profile-drop ${
        infoOpen ? "" : "hidden"
      } absolute w-[185px] bg-white top-[52px] rounded-lg py-[17px] right-[-10px] shadow-[0px_0px_8px_#5565751A]`}
    >
      <div className="flex py-2 pl-5 items-center hover:bg-[#5565751A]/[.05] cursor-pointer">
        <div className="bg-profile"></div>
        <p className="pl-[15px] text-[#43425D]">My Profile</p>
      </div>
      <div className="flex py-2 pl-5 items-center hover:bg-[#5565751A]/[.05] cursor-pointer">
        <div className="bg-bill"></div>
        <p className="pl-[15px] text-[#43425D]">Billing</p>
      </div>
      <div className="flex py-2 pl-5 items-center hover:bg-[#5565751A]/[.05] cursor-pointer">
        <div className="bg-logout"></div>
        <p className="pl-[15px] text-[#43425D]">Logout</p>
      </div>
    </div>
  );
};

export default ProfileDrop;
