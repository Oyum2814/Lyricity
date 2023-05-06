import React from "react";

export default function AlbumDesc(props) {
  return (
    <div className=" w-1/2  mb-2 md:mx-2 md:h-[30rem] text-center md:mb-0 md:w-[20%] rounded-lg md:bg-[#CAF0F8]">
      <img
        className="w-[100%] h-auto m-auto rounded-lg"
        src={props.sSongImage}
        alt="song"
      />
      <div className="mt-2 font-900 text-xl font-extrabold  md:p-3">
        {props.sName}
      </div>
      <div className="font-900 text-lg font-bold">{props.sSinger}</div>
    </div>
  );
}
