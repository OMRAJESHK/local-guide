"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAtom } from "jotai";
import { searchAtom } from "@/client/store/searchAtom";

const SearchHeading = () => {
  const { query } = useParams<{ query: "" }>();
  const [searchQuery, setSearchQuery] = useAtom(searchAtom);

  useEffect(() => {
    setSearchQuery((prev) => ({
      ...prev,
      query: query.replaceAll("%20", " "),
    }));
  }, [query, setSearchQuery]);

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-xl font-bold antialiased">You are looking for</h2>
      <p className="text-xs font-medium antialiased">{`'${searchQuery.query}'`}</p>
    </div>
  );
};

export default SearchHeading;
