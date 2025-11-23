import React from "react";

const ButtonFill = ({ name }) => {
  return (
    <button className="bg-[#2C2C2C] text-white px-2 md:px-8 py-2 md:py-4 rounded-full">
      {name}
    </button>
  );
};

export default ButtonFill;
