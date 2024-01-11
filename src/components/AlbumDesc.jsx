import React from "react";

export default function AlbumDesc(props) {
  return (
    <div className=" w-1/2 rounded-t-full rounded-b-3xl mb-2 md:mx-2 md:h-[auto] text-center  md:w-[20%] rounded-lg md:bg-[#CAF0F8]">
      <img
        className="w-[100%] h-auto m-auto rounded-full"
        src={props.sSongImage}
        alt="song"
      />
      <div className="mt-2 font-['Montserrat'] text-2xl font-semibold md:p-3">
        {props.sName}
      </div>
      <div className="mb-3 text-l font-['Montserrat'] font-normal underline">{props.sSinger}</div>
    </div>
  );
}
