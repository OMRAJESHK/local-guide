import Pagination from "@/client/components/pagination";
import Places from "@/client/modules/home/places";
import SearchHeading from "@/client/modules/search/searchHeading";
import { formatQueryString } from "@/client/utils";
import React, { Suspense } from "react";

const SearchedPlacesPage = ({
  params,
}: {
  params: { currentPage: string; query: string };
}) => {
  return (
    <>
      <SearchHeading />
      <Places
        limitValue={5}
        pageValue={params.currentPage}
        query={formatQueryString(params.query)}
      />
    </>
  );
};

export default SearchedPlacesPage;
