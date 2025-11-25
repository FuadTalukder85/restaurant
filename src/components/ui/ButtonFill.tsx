import React from "react";

const ButtonFill = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2C2C2C] text-white text-[7px] md:text-sm lg:text-xl 2xl:text-3xl px-2 md:px-8 py-2 md:py-3 rounded-full"
    >
      {name}
    </button>
  );
};

export default ButtonFill;
