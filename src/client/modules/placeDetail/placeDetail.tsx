import React from "react";
import Image from "next/image";
import Link from "next/link";
import { type placeItemData } from "@/server/types";

function PlaceDetail({ place }: { place: placeItemData }) {
  return (
    <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 gap-2">
      <div className="group rounded-lg border border-slate-300 px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100">
        <div className="flex gap-1">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
            {place.category}
          </span>
          <span className="flex-grow">
            <span className="flex-grow inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
              {place.known_for}
            </span>
          </span>
          <span>
            <Link
              href="/places/create"
              className="flex-grow p-3 bg-slate-600 hover:bg-slate-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-lg"
            >
              Add
            </Link>
          </span>
        </div>
        <div className="my-4 ">
          <h2 className="text-xl font-bold antialiased">{place.title}</h2>
          <p className="text-sm font-medium antialiased">{place.place}</p>
        </div>

        <div className="my-5">
          <p className="text-base indent-8">{place.description}</p>
        </div>
        <div className="my-2 flex justify-between">
          <div>
            <p className="text-xs font-medium antialiased">Person Known</p>
            <p className="text-xl font-medium antialiased">
              {place.person_known}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium antialiased">
              Person Contact Number
            </p>
            <p className="text-xl font-medium antialiased">
              {place.person_mobile}
            </p>
          </div>
        </div>

        <div className="my-5">
          <p className="text-base ">{place.remarks}</p>
        </div>
        <div className="my-5">
          <a
            target="_blank"
            href={place.map_link}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
          >
            {place.map_link}
          </a>
        </div>
        <div className="flex justify-between">
          <Link
            href="/places/edit"
            className="p-3 bg-slate-600 hover:bg-slate-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-lg"
          >
            Edit
          </Link>
          <button className="p-3 bg-slate-600 hover:bg-slate-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-lg">
            Delete
          </button>
        </div>
      </div>
      <div className="relative group rounded-lg border border-slate-300 px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100">
        <Image
          src={place.photo}
          alt={place.title}
          className="dark:invert"
          fill
          priority
        />
      </div>
    </div>
  );
}

export default PlaceDetail;
