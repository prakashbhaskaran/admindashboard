import React from "react";
import ProductVideo from "../Cards/ProductVideo";
import Profile from "../Cards/Profile";
import TopNav from "../Navbars/TopNav";
import Heading from "./Heading";
import Referrer from "../Cards/Referrer";
import { DoughChart } from "../Cards/Graphs/DoughChart";
import { LineChart } from "../Cards/Graphs/LineChart";

const Main = ({ setOpen, open }) => {
  return (
    <div
      className={`${
        open
          ? "ml-[250px] sm:ml-[290px] rounded-tl-[25px]"
          : "ml-0 rounded-tl-[0px]"
      }  bg-[#F5F7FB] min-h-screen  transition-all ease-in delay-100 pt-14 relative`}
    >
      <TopNav setOpen={setOpen} open={open} />
      <div className="px-5 py-10">
        <Heading />
        <div className="grid  gap-6 mt-6 grid-cols-[repeat(1,minmax(0,_1fr))] lg:grid-cols-[repeat(2,minmax(0,_1fr))] xl:grid-cols-[repeat(3,minmax(0,_1fr))]">
          <Profile />
          <Referrer />
          <LineChart />
          <DoughChart />
          <ProductVideo />
        </div>
      </div>
    </div>
  );
};

export default Main;
