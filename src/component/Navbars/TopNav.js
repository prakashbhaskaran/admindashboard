import React, { useState } from "react";

import NotifyDrop from "./utils/NotifyDrop";
import ProfilDrop from "./utils/ProfileDrop";

const TopNav = ({ setOpen, open }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  return (
    <div
      className={`h-[70px] py-[23px] px-[20px] bg-white flex items-center shadow-[0px_2px_6px_#0000000A] z-10 fixed top-0 transition-all ease delay-100 ${
        open
          ? "w-[calc(100%-250px)] sm:w-[calc(100%-290px)] md:rounded-tl-[25px]"
          : "w-full"
      }`}
    >
      <div className="flex items-center w-full justify-between gap-4">
        <div className="icon basis[3%]">
          <div
            onClick={() => setOpen(!open)}
            className="bg-ham"
            role="button"
          ></div>
        </div>

        <div className="profile flex justify-end gap-5 basis-[97%] items-center relative">
          <div className="icon">
            <div className="bg-search" role="button"></div>
          </div>
          <div className="search grow hidden md:block">
            <input
              type="text"
              placeholder="Search transactions, invoices or help"
              className="w-[90%] outline-0 placeholder:text-[#4D4F5C]"
            />
          </div>

          <div
            className="notify relative p-2 rounded-full hover:bg-slate-100/[0.5]"
            onClick={() => {
              setNotifyOpen(!notifyOpen);
              setInfoOpen(false);
            }}
          >
            <div className="bg-bell relative" role="button">
              <span className="before:absolute before:w-2 before:rounded-full before:right-0 before:top-[-1px] before:border-[1px] before:border-white before:h-2 before:bg-[#81E37A] before:z-10"></span>
            </div>
          </div>
          <div
            className="flex gap-4 items-center hover:bg-slate-100/[0.5] rounded-3xl px-2 py-1"
            onClick={() => {
              setInfoOpen(!infoOpen);
              setNotifyOpen(false);
            }}
            role="button"
          >
            <div
              className="dropdown items-center gap-2 text-[#4D4F5C]/[.7] hidden md:flex"
              role="button"
            >
              John Doe{" "}
              <p className={`${infoOpen ? "bg-dropup" : "bg-dropdown"}`}></p>
            </div>

            <div className="w-[30px] h-[30px]">
              <img
                src="/imgs/profile-pic-01.jpg"
                alt="error"
                className="object-cover rounded-full"
              />
            </div>
            <ProfilDrop infoOpen={infoOpen} />
          </div>
        </div>
      </div>
      <NotifyDrop notifyOpen={notifyOpen} />
    </div>
  );
};

export default TopNav;
