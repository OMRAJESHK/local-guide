"use client";
import React from "react";
import { searchAtom } from "@/client/store/searchAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const params = useParams();
  const [searchQuery, setSearchQuery] = useAtom(searchAtom);

  function onSearchClickHandler() {
    router.push(`/places/search/1/${searchQuery.query}`);
  }
  
  function onChangeHandler(event: React.FormEvent) {
    const { value } = event.target as HTMLInputElement;
    setSearchQuery((prev) => ({ ...prev, query: value }));
  }

  return (
    <>
      <div className="w-full relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="relative w-full h-96">
          <Image
            src="/places-hero.jpg"
            alt="Places Hero Logo"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 z-0"
            priority
          />
          <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 flex-col">
            <h1 className="text-white text-5xl font-bold">
              Welcome to Local Guide
            </h1>
            <p className="absolute right-0 bottom-0">Designed by Freepik</p>
          </div>
        </div>
      </div>

      <div className="mb-4 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex gap-4">
        <div className="w-full max-w-5xl">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchQuery.query}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button
          className="p-3 bg-slate-600 hover:bg-slate-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-lg"
          onClick={onSearchClickHandler}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Header;
