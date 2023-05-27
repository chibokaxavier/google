import React from "react";

const Avatar = ({ url }) => {
  return (
    <div>
      <img src={url} alt="" loading="lazy" className="rounded-full h-10 w-10 transition transform hover:scale-110 cursor-pointer animate-pulse " />
    </div>
  );
};

export default Avatar;
