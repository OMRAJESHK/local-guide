import React from "react";
import Places from "./places";

function PlaceList() {
  return <Places limitValue={5} pageValue={"1"} query={""} />;
}

export default PlaceList;
