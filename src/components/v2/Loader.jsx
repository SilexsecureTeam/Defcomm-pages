import React from "react";
import heroimg from "../../assets/default.png";

const Loader = () => {
  return (
    <div
      className=" relative w-[270px] h-[528px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional: Spinner for loading feedback */}
      <div className="w-12 h-12 border-4 border-t-[#89AF20] border-gray-700 rounded-full animate-spin"></div>
      <div className="absolute w-[270px] top-[400px] h-full left-4 text-[12px] inset-0">
        Redefining Defence,{" "}
        <span className="block text-green-400">Communcationl</span>
      </div>
    </div>
  );
};

export default Loader;
