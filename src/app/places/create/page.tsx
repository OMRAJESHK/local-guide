"use client";
import Input from "@/client/components/input/input";
import Textarea from "@/client/components/textarea/textarea";
import {
  InputAttributesEnum,
  type InputElementAttributeType,
  type PlaceDataType,
} from "@/client/types";
import { validationsConfig } from "@/client/validation/validationsConfig";
import React, { type FormEvent, useState } from "react";

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

const defaultInputValue = {
  value: "",
  error: { hasError: false, message: "" },
};
const inputFields = [
  InputAttributesEnum.title,
  InputAttributesEnum.description,
  InputAttributesEnum.category,
  InputAttributesEnum.place,
  InputAttributesEnum.known_for,
  InputAttributesEnum.map_link,
  InputAttributesEnum.photo,
  InputAttributesEnum.person_known,
  InputAttributesEnum.person_mobile,
  InputAttributesEnum.remarks,
];
const initialData = (): PlaceDataType => {
  let fields = {} as PlaceDataType;
  inputFields.forEach(
    (
      field:
        | InputAttributesEnum.title
        | InputAttributesEnum.description
        | InputAttributesEnum.category
        | InputAttributesEnum.place
        | InputAttributesEnum.known_for
        | InputAttributesEnum.map_link
        | InputAttributesEnum.photo
        | InputAttributesEnum.person_known
        | InputAttributesEnum.person_mobile
        | InputAttributesEnum.remarks
    ) => {
      fields = {
        ...fields,
        ...{ [field]: defaultInputValue },
      };
    }
  );
  return fields;
};

const PlaceCreatePage = () => {
  const [placeData, setPlaceData] = useState<PlaceDataType>(initialData());

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

  function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target as InputElementAttributeType;
    setPlaceData((prev: PlaceDataType) => ({
      ...prev,
      [name]: { ...prev[name], value: value },
    }));
  }

  function onBlurHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target as InputElementAttributeType;

    if (value.trim().length === 0) {
      setPlaceData((prev: PlaceDataType) => ({
        ...prev,
        [name]: {
          ...prev[name],
          error: { hasError: true, message: "Required...!" },
        },
      }));
    } else {
      setPlaceData((prev: PlaceDataType) => ({
        ...prev,
        [name]: {
          ...prev[name],
          error: { hasError: false, message: "" },
        },
      }));
    }
  }

  function checkValidity() {
    let isValid = false;
    let errorfields: Array<InputAttributesEnum> = [];
    const placeKeys = Object.keys(placeData) as Array<InputAttributesEnum>;
    placeKeys.forEach((field) => {
      if (
        validationsConfig[field] &&
        [
          InputAttributesEnum.title,
          InputAttributesEnum.place,
          InputAttributesEnum.description,
          InputAttributesEnum.category,
          InputAttributesEnum.map_link,
          InputAttributesEnum.known_for,
        ].includes(field)
      ) {
        const validate = validationsConfig[field];
        isValid = validate(placeData[field].value);
        if (!isValid) {
          errorfields = [...errorfields, field];
        }
      }
    });

    return { isValid, fields: errorfields };
  }
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { isValid, fields } = checkValidity();
    console.log("placeDataSuccessMsg", isValid, fields);
    if (isValid) {
      console.log("placeDataSuccessMsginner", isValid, fields);
    } else {
      fields.forEach((field) => {
        setPlaceData((prev: PlaceDataType) => ({
          ...prev,
          [field]: {
            ...prev[field],
            error: { hasError: true, message: "Required...!" },
          },
        }));
      });
    }
  }
  return (
    <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1">
      <div className="group rounded-lg border border-slate-300 px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100">
        <form onSubmit={onSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Input
              type="text"
              name="title"
              label="Title of the Place"
              placeholder="eg: Computer Peripherals & Laptop Accossories, Book Store etc."
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={placeData.title.value}
              error={placeData.title.error}
            />
            <Input
              type="text"
              label="Address of the Place"
              name="place"
              placeholder="eg: S.P. Road, Bangalore, Karnataka1"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={placeData.place.value}
              error={placeData.place.error}
            />

            <Input
              type="text"
              label="Category of the Place"
              name="category"
              placeholder="eg: Electronics"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={placeData.category.value}
              listid="categoryList"
              listData={[
                { id: "0", label: "FOO", value: "the foo label" },
                { id: "1", label: "BAR", value: "bar" },
              ]}
              error={placeData.category.error}
            />

            <Input
              type="text"
              label="Place Known For"
              name="known_for"
              placeholder="eg: best in electronics"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={placeData.known_for.error}
              value={placeData.known_for.value}
            />
            <Input
              type="text"
              label="Google Link"
              name="map_link"
              placeholder="eg: google map link"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={placeData.map_link.value}
              error={placeData.map_link.error}
            />
          </div>

          <div className="mb-6">
            <Textarea
              label="Description"
              name="description"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              placeholder="eg: Famous for Chats."
              value={placeData.description.value}
              error={placeData.description.error}
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
                    <Input
                      type="text"
                      label="Local Person Known"
                      name="person_known"
                      placeholder="eg: Kumaranna"
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}
                      value={placeData.person_known.value}
                    />

                    <Input
                      type="text"
                      label="Local Person Mobile"
                      name="person_mobile"
                      placeholder="eg: 8956230122"
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}
                      value={placeData.person_mobile.value}
                    />

                    <Input
                      type="text"
                      label="Image Link"
                      name="mapLink"
                      placeholder="eg: https://maps.app.goo.gl/bouyPNDvtnTjZuw09"
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}
                      value={placeData.map_link.value}
                    />

                    <Textarea
                      label="Remarks"
                      name="remarks"
                      onChange={onChangeHandler}
                      onBlur={onBlurHandler}
                      placeholder="eg: This place is always crowded."
                      value={placeData.remarks.value}
                      error={placeData.remarks.error}
                    />
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
