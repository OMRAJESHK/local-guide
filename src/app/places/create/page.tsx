import React from "react";

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

const PlaceCreatePage = () => {
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
          </div>
          <div className="mb-6">
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
