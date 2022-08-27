import React from "react";

const Heading = () => {
  return (
    <div className="header flex justify-between items-center gap-5">
      <p className="font-[600] text-[#43425D] text-2xl">Overview</p>
      <button className="flex items-center gap-4 justify-center min-w-[146px] md:min-w-40 h-[46px] md:h-12 bg-[#6763E3] text-white rounded-[6px] hover:bg-[#514DDC]">
        <div>Add Funds</div>
        <div className="bg-[#514DDC] rounded-full p-2">
          <div className="bg-plus"></div>
        </div>
      </button>
    </div>
  );
};

export default Heading;
