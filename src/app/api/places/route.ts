import {
  getPagination,
  getPaginationValidation,
  sendResponse,
} from "@/app/server/uitls";
import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";
import { type PlacesType } from "@/app/server/types";
import { sqlcommand } from "@/app/server/cmds";
import { placeValidator } from "@/app/server/validation";
import { PlacesEnum } from "@/app/server/enums";

export async function GET(req: NextRequest, res: NextResponse) {
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

      const places = db.prepare(
        sqlcommand.get(Number(pageValue), limitValue, query)
      );
      const placesCount = db.prepare(sqlcommand.getAllCount());

      const getAllPlaces = places.all() as PlacesType[];
      const totalPlaces = placesCount.get() as { count: number | 0 };

      const pagination = getPagination(
        limitValue,
        pageValue,
        totalPlaces?.count
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
    const error = err as { message: string; MongooseError: object };
    return sendResponse({ message: error.message }, 500);
  }
}
