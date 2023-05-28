import Avatar from "@/components/Avatar";
import Head from "next/head";
import Image from "next/image";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const Search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`search?term=${term}`);
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Head>
        <title>Google</title>
      </Head>
      {/* Header */}
      <header className="w-full text-sm text-gray-700 p-5 flex justify-between">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="w-10 h-10 p-2  rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* avatar */}
          <Avatar url="https://images.pexels.com/photos/16968296/pexels-photo-16968296/free-photo-of-blogger-yokohama.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
      </header>

      {/* body */}
      <form className="mt-44 flex flex-col items-center flex-grow  w-4/5 ">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md lg:max-w-2xl px-5 py-3 items-center sm:max-w-xl rounded-full border border-gray-200">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8  sm:space-y-0 sm:flex-row  sm:space-x-4">
          <button onClick={Search} className="btn">
            {" "}
            Google Search
          </button>
          <button onClick={Search} className="btn">
            I am m feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
