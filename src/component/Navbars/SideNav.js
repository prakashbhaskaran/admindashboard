import React from "react";

const SideNav = ({ open }) => {
  const Nav = {
    items:
      "py-[16px] h-[54px] pl-5 flex gap-5 items-center list cursor-pointer",
  };
  return (
    <div
      className={`Nav fixed top-0 w-[400px] ${
        open ? "left-0" : "left-[-100%]"
      } bg-[#43425D] text-white h-full transition-all ease delay-100`}
    >
      <div className="pt-[20px] font-black tracking-[0.2rem] h-[70px] text-2xl bg-[#3C3B54]  pl-5">
        ACME
      </div>
      <div className={`${Nav.items}`}>
        <div className="bg-home bg-icon"></div>
        <p>Home</p>
      </div>
      <div className={`${Nav.items} active`}>
        <div className="bg-dashboard bg-icon live"></div>
        <p>Dashboard</p>
      </div>
      <div className={`${Nav.items}`}>
        {" "}
        <div className="bg-inbox bg-icon"></div>
        <p>Inbox</p>
        <p className="tag text-[10px] bg-[#FF4A33] px-[10px] py-[1px] rounded-full ml-[80px] sm:ml-[100px]">
          New
        </p>
      </div>
      <div className={`${Nav.items}`}>
        {" "}
        <div className="bg-products bg-icon"></div>
        <p>Products</p>
      </div>
      <div className={`${Nav.items}`}>
        {" "}
        <div className="bg-admin bg-icon"></div>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default SideNav;
