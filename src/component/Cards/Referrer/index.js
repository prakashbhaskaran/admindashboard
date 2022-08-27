import React from "react";
import InfoTable from "./InfoTable";

const Referrer = () => {
  return (
    <div className="bg-white rounded-[10px] p-4 min-w-[240px] order-4 md:col-span-0 xl:col-span-2 row-span-3">
      <div className="text-[18px] text-[#4D4F5C]">Referrer</div>
      <InfoTable />
    </div>
  );
};

export default Referrer;
