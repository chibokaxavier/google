import React from "react";

const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center border-b-4 border-transparent space-x-1 hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="md:h-4 h-6 " />
      <p className="hidden sm:inline-flex"> {title}</p>
    </div>
  );
};

export default HeaderOption;
