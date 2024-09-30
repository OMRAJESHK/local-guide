import { z } from "zod";
import { paginationValidator, placeValidator } from "./validation";

export type PaginationType = {
  limit: number;
  currentPage: number;
  totalPages: number;
};
export type ResponseType = {
  message?: string;
  pagination?: PaginationType;
  data?: object | object[];
  error?: object | unknown;
  query?: string;
};
export type QueryType = z.infer<typeof paginationValidator>;
export type PlacesType = z.infer<typeof placeValidator>;
export type ParamsType = { params: { placeId: string } };
export type SearchQueryType = { params: { query: string } };

export type placeItemData = {
  id: string;
  title: string;
  description: string;
  category: string;
  place: string;
  known_for: string;
  map_link: string;
  photo: string;
  person_known: string;
  person_mobile: string;
  remarks: string;
};
