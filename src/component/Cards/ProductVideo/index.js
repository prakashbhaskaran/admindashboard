import React from "react";

const ProductVideo = () => {
  return (
    <div className="video bg-white px-5 py-10 min-w-[240px]  rounded-[10px] order-5">
      <div className="flex justify-between">
        <p className="text-[#4D4F5C] text-[18px]">Product Video</p>
        <p className="bg-options" role="button"></p>
      </div>
      <div className="flex mt-5">
        <a
          href="https://youtu.be/bC6_FMqX_Y8"
          target="_blank"
          rel="noreferrer"
          className="m-auto relative"
        >
          <div className="absolute w-[60px] h-[60px] bg-white top-0 z-20 rounded-full m-auto bottom-0 left-0 right-0">
            <div className="bg-play ml-6 mt-5"></div>
          </div>
          <div className="absolute w-[72px] h-[72px] bg-white/[0.33] top-0 z-10 rounded-full m-auto bottom-0 left-0 right-0"></div>
          <img
            src="/imgs/video_thumbnail.png"
            alt="error"
            className="w-full rounded-[6px]"
          />
        </a>
      </div>
    </div>
  );
};

export default ProductVideo;
