export type PlaceItemProps = {
  id: string;
  title: string;
  description: string;
  place: string;
  photo: string;
};

export type PlacesServerProps = {
  limitValue: number;
  pageValue: string;
  query: string;
};
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  query: string;
  count: number;
  // onNext: () => void;
};
