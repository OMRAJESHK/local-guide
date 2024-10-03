"use client";
import React from "react";
import Link from "next/link";
import { type PaginationProps } from "@/client/types";

const Pagination = ({
  currentPage,
  totalPages,
  query,
  count,
}: PaginationProps) => {
  const getPrevLink = () => {
    if (currentPage === 1) return `/places/search/${currentPage}/${query}`;
    else return `/places/search/${currentPage - 1}/${query}`;
  };

  const getNextLink = () => {
    if (currentPage === totalPages)
      return `/places/search/${currentPage}/${query}`;
    else return `/places/search/${currentPage + 1}/${query}`;
  };

  function createArrayFromRange(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  const pageLinkItems = () => {
    let pageLinks: number[] = createArrayFromRange(1, totalPages);
    if (totalPages <= 5) {
      pageLinks = createArrayFromRange(1, totalPages);
    }
    return pageLinks;
  };

  return (
    <div className="w-full max-w-5xl">
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <Link
            href={getPrevLink()}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </Link>
          <Link
            href={getNextLink()}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-semibold"> {currentPage} </span>
              to
              <span className="font-semibold"> {totalPages} </span>
              of
              <span className="font-semibold"> {count} </span>
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Link
                href={getPrevLink()}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {pageLinkItems().map((item) => (
                <Link
                  key={item}
                  href={`/places/search/${item}/${query}`}
                  className={`relative z-10 inline-flex items-center ${
                    currentPage === item
                      ? "bg-indigo-600 focus-visible:outline-indigo-600 text-white"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300"
                  } px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                  {item}
                </Link>
              ))}
              <Link
                title="Next"
                href={getNextLink()}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
