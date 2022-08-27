import React from "react";

const Users = ({ image, name, time, country, number, noti }) => {
  if (!image && !name && !time && !country && !number) {
    return null;
  }
  return (
    <div className="user flex items-center justify-between">
      <div className="w-[50px] h-[50px]">
        <img src={image} alt="error" className="object-cover rounded-full" />
      </div>
      <div className="flex flex-col basis-[70%]">
        <div className="flex justify-between">
          <p className="text-[#4D4F5C] font-[600]">{name}</p>
          <p className="text-sm text-[#43425D] text-opacity-[50%]">
            {time ? time : null}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-[#43425D] text-opacity-[50%]">
            {country ? country : noti}
          </p>
          <p className="text-sm text-[#43425D] text-opacity-[50%]">
            {number ? `Mob: ${number}` : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
