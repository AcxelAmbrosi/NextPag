import Image from "next/image";
import img_one from "../images/ops-thumb.png";
import img_two from "../images/systems-thumb.png";
import img_three from "../images/thumb.png";
import img_four from "../images/AnimationHandbook_A.png";
import img_five from "../images/sprints-thumb.png";
import img_six from "../images/thumb-revised.jpg";
import img_mujer from "../images/mujer.jpg";
import { Card } from "../components/Card";

export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-8 md:px-44 lg:px-48 mt-52">
        <Card img={img_one} />
        <Card img={img_two} />
        <Card img={img_three} />
        <Card img={img_four} />
        <Card img={img_five} />
        <Card img={img_six} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 p-14 bg-blue-600 ">
        <Image src={img_mujer} alt="" className="hover:cursor-pointer" />
        <div className="flex flex-col text-white font-semibold text-6xl xl:text-7xl">
          <div className=" pt-10">
            <spam className=" text-left bg-black ">The visual collaboration platform disguised as an online whiteboard</spam>
          </div>
          <a className="underline hover:cursor-pointer">Try Freehand</a>
        </div>
      </div>
    </div>
  );
}
