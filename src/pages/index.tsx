import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Features from "../components/features";
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";
import img6 from "../../public/6.jpg";
import img7 from "../../public/7.jpg";
import bgimage from "../content/bgimage.jpg";
import logoimg from "../../public/pngwing.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="parent min-h-screen">
      <Navbar />
      <div
        className="bg-vdo"
        style={{ backgroundImage: `url(${bgimage})` }}
      ></div>

      <div className="flex justify-center h-48  items-center flex-col min-h-fit">
        <h3>A PLACE TO REFLECT</h3>
        <h3>A PLACE TO REPLICATE</h3>
      </div>

      <div className="absolute  grid grid-cols-7 gap-0 bottom-0 h-40 w-full ">
        <Features imageurl={img1} logoimg={logoimg} />
        <Features imageurl={img2} logoimg={logoimg} />
        <Features imageurl={img3} logoimg={logoimg} />
        <Features imageurl={img4} logoimg={logoimg} />
        <Features imageurl={img5} logoimg={logoimg} />
        <Features imageurl={img6} logoimg={logoimg} />
        <Features imageurl={img7} logoimg={logoimg} />
      </div>
    </div>
  );
}
