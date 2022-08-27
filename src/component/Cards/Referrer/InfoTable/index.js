import React from "react";
import { numberWithCommas } from "../../Graphs/DoughChart";

const InfoTable = () => {
  const data = [
    {
      location: "google.com",
      views: 222,
      sales: 900,
      conversion: 43,
      total: 929000,
    },
    {
      location: "google.com",
      views: 222,
      sales: 900,
      conversion: 43,
      total: 929000,
    },
    {
      location: "google.com",
      views: 222,
      sales: 900,
      conversion: 43,
      total: 929000,
    },
    {
      location: "google.com",
      views: 222,
      sales: 900,
      conversion: 43,
      total: 929000,
    },
    {
      location: "google.com",
      views: 222,
      sales: 900,
      conversion: 43,
      total: 929000,
    },
    {
      location: "google.com",
      views: 222,
      sales: 900,
      conversion: 43,
      total: 929000,
    },
  ];
  return (
    <div className="bg-white mt-5">
      <div className="overflow-x-auto overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F5F6FA]">
            <tr className="[&>*]:text-left [&>*]:py-4 [&>*]:text-sm [&>*]:font-[600] [&>*]:text-[#A3A6B4] [&>*]:min-w-[150px]">
              <th className="pl-4 py-4">Location</th>
              <th>Views</th>
              <th>Sales</th>
              <th>Conversion</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-sm text-[#4D4F5C] border-b-[0.5px] border-[#F0F4F7] [&>*]:min-w-[150px] [&>*]:py-4"
                >
                  <td className="pl-4">{item.location}</td>
                  <td className="pl-2">{item.views}</td>
                  <td className="pl-2">{item.sales}</td>
                  <td className="pl-2">{item.conversion}%</td>
                  <td className="pl-2">${numberWithCommas(item.total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="pl-4 mt-4 text-sm text-[#3B86FF]" role="button">
        Show More
      </p>
    </div>
  );
};

export default InfoTable;
