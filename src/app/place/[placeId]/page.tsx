import React, { Suspense } from "react";
import { getPlaceData } from "@/app/api/places/helper";
import PlaceDetail from "@/client/modules/placeDetail/placeDetail";
import { ParamsType } from "@/server/types";

async function PlaceDetails({ params }: ParamsType) {
  const placeDetails = getPlaceData(params.placeId);
  return (
    <Suspense>
      <PlaceDetail place={placeDetails} />
    </Suspense>
  );
}

export default PlaceDetails;
