import { NextResponse } from "next/server";
import {
  type QueryType,
  type PaginationType,
  type ResponseType,
} from "./types";
import { paginationValidator } from "./validation";

export function sendResponse(content: ResponseType, statusCode: number) {
  return NextResponse.json(content, { status: statusCode });
}

export function getPaginationValidation(urlString: string) {
  const url = new URL(urlString);
  const query = Object.fromEntries(url.searchParams) as QueryType;
  return paginationValidator.safeParse(query);
}

export function getPagination(limit: number, page: string, total: number) {
  const pagination: PaginationType = {
    limit,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
  };
  return pagination;
}
