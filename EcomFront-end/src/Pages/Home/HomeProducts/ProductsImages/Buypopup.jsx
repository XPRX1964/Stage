import { useState } from "react";
import HeartIcon from "../../../../Components/Header/HeartIcon";
import ShopingCart from "../../../../Components/Header/ShopingCart";
import EyeSvg from "../EyeSvg";

const Buypopup = () => {
  const [color, setColor] = useState("white"); // Stroke color
  const [fill, setFill] = useState("none"); // Fill color

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "white" ? "none" : "white"));
    setFill((prevFill) => (prevFill === "none" ? "white" : "none"));
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
      <button onClick={toggleColor}>
        <div className="h-[40px] w-[40px] flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 transition-opacity duration-300 delay-[120ms]  hover:transition hover:duration-300 ease-in-out">
          <HeartIcon color={color} fill={fill} animate="hover:animate-pulse" />
        </div>
      </button>
      <button
        className="flex-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex-1 group flex justify-center items-center text-white gap-2 font-poppins opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 h-[40px] delay-[180ms] transition-all duration-700 ease-in-out ${
            isHovered ? "" : ""
          }`}
        >
          <div
            className={`${
              isHovered
                ? "animate-pulse flex items-center justify-center"
                : "flex items-center justify-center"
            }`}
          >
            Add To Cart
          </div>
          <div className="flex p-1">
            <ShopingCart
              color="white"
              className={`${isHovered ? "animate-pulse" : ""}`}
            />
          </div>
        </div>
      </button>

      <button>
        <div className="h-[40px] w-[40px] flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600  transition-opacity duration-1000 delay-[240ms] p-[6px]  hover:transition hover:duration-300 ease-in-out">
          <EyeSvg color="white" className="hover:animate-pulse" />
        </div>
      </button>
    </div>
  );
};

export default Buypopup;
