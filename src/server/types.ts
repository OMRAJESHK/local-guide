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
