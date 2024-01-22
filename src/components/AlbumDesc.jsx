import React from "react";

export default function AlbumDesc(props) {
  return (
    <div className=" w-1/2 rounded-[20px] mb-2 md:mx-2 md:h-[auto] text-center  md:w-[25%] bg-[#CAF0F8]">
      <img
        className="w-[100%] h-auto m-auto rounded-t-[20px]"
        src={props.sSongImage}
        alt="Album Cover"
      />
      <div className="mt-2 mont text-l font-semibold md:p-3 md:text-xl ">
        {props.sName}
      </div>
      <div className="mb-5 text-l mont font-normal underline">{props.sSinger}</div>
    </div>
  );
}
