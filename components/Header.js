import { XIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import Headeroptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white  items-center">
      <div className="w-full flex md:p-6 p-4 items-center relative ">
        <Image
          onClick={() => router.push("/")}
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
          height={40}
          width={120}
          className="cursor-pointer md:h-[40px] md:w-[120px] h-[20px] w-[60px] "
        />
        <form className="flex  flex-grow border px-6 md:py-3 py-1 mx-2 md:ml-10 md:mr-5 border-gray-200 rounded-full shadow-lg  max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="md:h-7 h-4 sm:mr-3 cursor-pointer transition transform duration-100 hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 text-blue-500 border-l-2 pl-4 border-gray-300 h-6 hidden sm:inline-flex" />
          <SearchIcon className="h-6 text-blue-500 hidden  sm:inline-flex" />
          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          url="https://images.pexels.com/photos/16968296/pexels-photo-16968296/free-photo-of-blogger-yokohama.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className="lg:mr-6 absolute md:top-8 md:right-0  top-3 p-1 md:p-0 "
        />
      </div>
      <Headeroptions />
    </header>
  );
};

export default Header;
