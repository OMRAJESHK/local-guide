import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";
import { type PlacesType } from "@/server/types";
import { sqlcommand } from "@/server/cmds";
import { placeValidator } from "@/server/validation";
import { PlacesEnum } from "@/server/enums";
import { sendResponse, getPaginationValidation } from "@/server/uitls";
import { getPlacesData } from "./helper";

export async function GET(req: NextRequest, _: NextResponse) {
  try {
    const validation = getPaginationValidation(req.url);
    if (!validation.success) {
      return sendResponse(
        { error: validation.error.errors, message: "Invalid Paginaton Query" },
        400
      );
    } else {
      const { limit = 10, page = 1, query = "" } = validation.data;
      const limitValue = Number(limit);
      const pageValue = Number(page);

      const { getAllPlaces, pagination } = await getPlacesData(
        limitValue,
        pageValue,
        query
      );

      return sendResponse(
        { pagination: pagination, data: getAllPlaces, query },
        200
      );
    }
  } catch (err) {
    console.error(err);
    const error = err as { message: string };
    return sendResponse({ message: error.message }, 500);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const validation = placeValidator.safeParse(body);
    if (!validation.success) {
      return sendResponse(
        {
          message: validation.error.message,
          error: validation.error,
        },
        400
      );
    } else {
      const insertPlace = db.prepare(sqlcommand.insert());
      const {
        title,
        description,
        category,
        place,
        known_for,
        map_link,
        photo,
        person_known,
        person_mobile,
        remarks,
      }: PlacesType = body;

      const result = insertPlace.run(
        crypto.randomUUID(),
        title,
        description,
        category,
        place,
        known_for,
        map_link,
        photo,
        person_known,
        person_mobile,
        remarks
      );

      return sendResponse(
        {
          message: PlacesEnum.PLACE_SAVE_SUCCESS,
          data: result,
        },
        201
      );
    }
  } catch (err) {
    const error = err as { message: string };
    return sendResponse({ message: error.message }, 500);
  }
}
