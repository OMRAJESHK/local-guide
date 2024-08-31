import { z } from "zod";
import { ErrorMessages } from "./enums";

export const placeValidator = z
  .object({
    title: z.string().min(1, ErrorMessages.TITLE_REQUIRED),
    description: z.string().min(1, ErrorMessages.DESC_REQUIRED),
    category: z.string().min(1, ErrorMessages.CATEGORY_REQUIRED),
    place: z.string().min(1, ErrorMessages.PLACE_REQUIRED),
    known_for: z.string().min(1, ErrorMessages.KNOWN_FOR_REQUIRED),
    map_link: z.string().min(1, ErrorMessages.MAP_REQUIRED),
    person_known: z.string().optional(),
    person_mobile: z.string().optional(),
    remarks: z.string().optional(),
  })
  .strict();

export const paginationValidator = z
  .object({
    limit: z.string().optional().default("10"),
    page: z.string().optional().default("1"),
  })
  .strict();
