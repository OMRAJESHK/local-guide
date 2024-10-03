import React, { Suspense } from "react";
import { type PlacesServerProps } from "@/client/types";
import { getPlacesData } from "@/app/api/places/helper";
import PlaceItem from "./placeItem";
import Pagination from "@/client/components/pagination";

async function Places({ limitValue, pageValue, query }: PlacesServerProps) {
  const { getAllPlaces, totalPlaces, pagination } = await getPlacesData(
    limitValue,
    pageValue,
    query
  );

  return (
    <>
      <Suspense fallback={<p className="text-sm">Loading...!</p>}>
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-rows-4 lg:text-left">
          {getAllPlaces.map((place: any) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              place={place.place}
              title={place.title}
              photo={place.photo}
              description={place.description}
            />
          ))}
        </div>
      </Suspense>
      <Pagination
        currentPage={Number(pageValue)}
        totalPages={pagination.totalPages}
        query={query}
        count={totalPlaces}
      />
    </>
  );
}

export default Places;
