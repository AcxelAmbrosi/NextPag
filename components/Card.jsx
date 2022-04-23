import Image from "next/image";
import React from "react";

export const Card = ({ img }) => {
  return (
    <div className="flex flex-row justify-center md:flex-col hover:text-blue-600  transition ease-in-out">
      <Image src={img} alt="imagen" width={380} height={506} />
      <div className="flex flex-col  md:pt-10 mb-28  px-4 md:px-0">
        <p className="text-xl lg:text-lg transition ease-in-out hover:underline font-semibold ">Animation Handbook</p>
        <p className=" opacity-60 text-black ">By Ryan McLeon</p>
        <a> </a>
      </div>
    </div>
  );
};
