import { sqlcommand } from "@/server/cmds";
import db from "../../../../lib/db";
import { type placeItemData, type PlacesType } from "@/server/types";
import { getPagination } from "@/server/uitls";

export async function getPlacesData(
  limitValue: number,
  pageValue: number,
  query: string
) {
  const places = db.prepare(
    sqlcommand.get(Number(pageValue), limitValue, query)
  );
  const placesCount = db.prepare(sqlcommand.getAllCount());

  const getAllPlaces = places.all() as PlacesType[];
  const totalPlaces = placesCount.get() as { count: number | 0 };

  const pagination = getPagination(limitValue, pageValue, totalPlaces?.count);

  return { getAllPlaces, totalPlaces, pagination };
}

export function getPlaceData(placeId: string) {
  const place = db.prepare(sqlcommand.getById());
  const result = place.get(placeId) as placeItemData;
  return result;
}
