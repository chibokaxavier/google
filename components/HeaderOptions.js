import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Headeroptions = () => {
  return (
    <div className="flex  justify-evenly w-full lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/* left */}
      <div className="flex items-center  space-x-6">
        <HeaderOption  Icon={SearchIcon} title="ALL" selected/>
        <HeaderOption  Icon={PhotographIcon} title="Images" />
        <HeaderOption  Icon={PlayIcon} title="Videos" />
        <HeaderOption  Icon={NewspaperIcon} title="News" />
        <HeaderOption  Icon={MapIcon} title="Maps" />
        <HeaderOption  Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default Headeroptions;
