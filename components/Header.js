import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const tearm = searchInputRef.current.value;

    if (!tearm) return;

    router.push(`/search?tearm=${tearm}`);
  };
  return (
    <header className="sticky t-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://cdn.pixabay.com/photo/2015/11/02/14/01/google-1018443_960_720.png"
          height={40}
          width={120}
          alt="Google Logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <from className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 ml-10 mr-5 p-2">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 transform transition duration-100 hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex border-l-2 border-gray-300 text-blue-500 pl-4" />
          <SearchIcon
            onClick={search}
            className="h-6 hidden sm:inline-flex text-blue-500"
          />
          <button onClick={search} hidden>
            Search
          </button>
        </from>
        <Avatar
          className="ml-auto"
          url="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
