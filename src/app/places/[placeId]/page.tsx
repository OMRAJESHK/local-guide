import Link from "next/link";
import React from "react";

const placeItem = {
  id: "c811b55b-d48b-4325-955e-08e8cfb1b3e6",
  title: "Computer Peripherals & Laptop Accossories",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  category: "Electronics",
  place: "S.P. Road, Bangalore, Karnataka1",
  known_for: "Computer Items",
  map_link: "https://maps.app.goo.gl/bouyPNDvtnTjZuwH8",
  person_known: "Rajesh kanna",
  person_mobile: "+91 8090987655",
  remarks: "Metro is available @ 1.2 km",
};

const PlaceDetails = () => {
  return (
    <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1">
      <div className="group rounded-lg border border-slate-300 px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100">
        <div className="flex gap-1">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
            {placeItem.category}
          </span>
          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
            {placeItem.known_for}
          </span>
        </div>
        <div className="my-4 ">
          <h2 className="text-xl font-bold antialiased">{placeItem.title}</h2>
          <p className="text-sm font-medium antialiased">{placeItem.place}</p>
        </div>

        <div className="my-5">
          <p className="text-base indent-8">{placeItem.description}</p>
        </div>
        <div className="my-2 flex justify-between">
          <div>
            <p className="text-xs font-medium antialiased">Person Known</p>
            <p className="text-xl font-medium antialiased">
              {placeItem.person_known}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium antialiased">
              Person Contact Number
            </p>
            <p className="text-xl font-medium antialiased">
              {placeItem.person_mobile}
            </p>
          </div>
        </div>
    
        <div className="my-5">
          <p className="text-base ">{placeItem.remarks}</p>
        </div>
        <div className="my-5">
          <a
            target="_blank"
            href={placeItem.map_link}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
          >
            {placeItem.map_link}
          </a>
        </div>
        <div className=" flex justify-between">
          <Link
            href="/places/create"
            className="p-3 bg-slate-600 hover:bg-slate-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-lg"
          >
            Add
          </Link>
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
    </div>
  );
};

export default PlaceDetails;
