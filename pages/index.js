import Avatar from "@/components/Avatar";
import Head from "next/head";
import Image from "next/image";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <>
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
      {/* footer */}
    </>
  );
}
