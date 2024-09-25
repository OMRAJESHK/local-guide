import { type PlaceItemProps } from "@/client/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlaceItem = (props: PlaceItemProps) => {
  const { id, title, description, photo, place } = props;
  return (
    <Link
      href={`/places/${id}`}
      className="flex gap-2 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <div className="relative w-24">
        <Image src={photo} alt={title} className="dark:invert" fill priority />
      </div>
      <div>
        <h2 className="mb-3 text-2xl font-semibold">
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
          {place}
        </span>
      </div>
    </Link>
  );
};

export default PlaceItem;
