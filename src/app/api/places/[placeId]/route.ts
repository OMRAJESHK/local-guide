import { type ParamsType, type PlacesType } from "@/server/types";
import db from "../../../../../lib/db";
import { sqlcommand } from "@/server/cmds";
import { PlacesEnum } from "@/server/enums";
import { placeValidator } from "@/server/validation";
import { sendResponse } from "@/server/uitls";

export async function GET(_: Request, { params }: ParamsType) {
  try {
    const place = db.prepare(sqlcommand.getById());
    const result = place.get(params.placeId) as PlacesType;
    if (result) {
      return sendResponse(
        {
          message: PlacesEnum.PLACE_GETBYID_SUCCESS,
          data: result,
        },
        200
      );
    } else {
      return sendResponse(
        {
          message: PlacesEnum.PLACE_GETBYID_FAIL,
          data: result,
        },
        200
      );
    }
  } catch (err) {
    const error = err as { message: string };
    return sendResponse({ message: error.message }, 500);
  }
}
export async function PUT(req: Request, { params }: ParamsType) {
  try {
    const body = await req.json();

    const placeObj: PlacesType = body;
    const validation = placeValidator.safeParse(placeObj);
    if (!validation.success) {
      const errResponse = validation.error.issues[0];
      return sendResponse({ error: errResponse }, 400);
    } else {
      const id = params.placeId;
      const insertPlace = db.prepare(sqlcommand.update());
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
        id
      );
      if (result.changes === 1) {
        return sendResponse(
          {
            message: PlacesEnum.PLACE_UPDATE_SUCCESS,
            data: result,
          },
          200
        );
      } else {
        return sendResponse(
          {
            message: PlacesEnum.PLACE_UPDATE_FAIL,
            data: result,
          },
          200
        );
      }
    }
  } catch (err) {
    const error = err as { message: string };
    return sendResponse({ message: error.message }, 500);
  }
}

export async function DELETE(_: Request, { params }: ParamsType) {
  try {
    const id: string = params.placeId;

    const statement = db.prepare(sqlcommand.delete());
    const result = statement.run(id);

    if (result.changes > 0) {
      return sendResponse(
        {
          message: PlacesEnum.PLACE_DELETE_SUCCESS,
          data: result,
        },
        200
      );
    } else {
      return sendResponse(
        {
          message: PlacesEnum.PLACE_DELETE_FAIL,
          data: result,
        },
        200
      );
    }
  } catch (err) {
    const error = err as { message: string };
    return sendResponse({ error, message: error.message }, 500);
  }
}
