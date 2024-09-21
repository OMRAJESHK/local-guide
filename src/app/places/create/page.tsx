"use client";
import React, { useState } from "react";

const placeItem = {
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

type PlaceData = {
  title: string;
  description: string;
  category: string;
  place: string;
  known_for: string;
  map_link: string;
  person_known: string;
  person_mobile: string;
  remarks: string;
};

const initialData = {
  title: "",
  description: "",
  category: "",
  place: "",
  known_for: "",
  map_link: "",
  person_known: "",
  person_mobile: "",
  remarks: "",
};
const PlaceCreatePage = () => {
  const [placeData, setPlaceData] = useState<PlaceData>(initialData);
  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;

    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (
      content &&
      icon &&
      content.style.maxHeight &&
      content.style.maxHeight !== "0px"
    ) {
      content.style.maxHeight = "0";
      icon.innerHTML = plusSVG;
    } else {
      if (content && icon) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.innerHTML = minusSVG;
      }
    }
  }

  return (
    <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1">
      <div className="group rounded-lg border border-slate-300 px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="titleOfThePlace"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title of the Place
              </label>
              <input
                type="text"
                id="titleOfThePlace"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg: Computer Peripherals & Laptop Accossories, Book Store etc."
                required
              />
            </div>
            <div>
              <label
                htmlFor="addressOfThePlace"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address Of The Place
              </label>
              <input
                type="text"
                id="addressOfThePlace"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="S.P. road Bangalore"
                required
              />
            </div>
            <div>
              <label
                htmlFor="CategoryOfThePlace"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category of the Place
              </label>

              <input
                id="CategoryOfThePlace"
                type="text"
                name="autocomplete"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                list="some-data"
                placeholder="choose a category"
              />
              <datalist id="some-data">
                <option value="foo" />
                <option value="bar" />
                <option value="baz" />
              </datalist>
            </div>
            <div>
              <label
                htmlFor="placeKnownFor"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Place Known For
              </label>
              <input
                type="text"
                id="placeKnownFor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="best in electronics"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="the description of the place"
              required
            />
          </div>
          <div className="mb-6">
            <div className="border-b border-slate-200">
              <button
                type="button"
                onClick={() => toggleAccordion(1)}
                className="w-full flex justify-between items-center py-5 text-slate-800"
              >
                <span>More Details</span>
                <span
                  id="icon-1"
                  className="text-slate-800 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                </span>
              </button>
              <div
                id="content-1"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="pb-5 text-sm text-slate-500">
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="localPersonKnown"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Local Person Known
                      </label>
                      <input
                        type="text"
                        id="localPersonKnown"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="eg: Computer Peripherals & Laptop Accossories, Book Store etc."
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="localPersonMobile"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Local Person Mobile
                      </label>
                      <input
                        type="text"
                        id="localPersonMobile"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="S.P. road Bangalore"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mapLink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image Link
                      </label>
                      <input
                        type="url"
                        id="mapLink"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="https://maps.app.goo.gl/bouyPNDvtnTjZuwH8"
                        required
                      />
                      <button type="button">preview</button>
                    </div>

                    <div>
                      <label
                        htmlFor="mapLink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Map Link
                      </label>
                      <input
                        type="url"
                        id="mapLink"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="https://maps.app.goo.gl/bouyPNDvtnTjZuwH8"
                        required
                      />
                      <button type="button">preview</button>
                    </div>
                    <div>
                      <label
                        htmlFor="placeRemarks"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Remarks
                      </label>
                      <textarea
                        id="placeRemarks"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="the remarks of the place"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceCreatePage;
