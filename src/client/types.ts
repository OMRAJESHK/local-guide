export type PlaceItemProps = {
  id: string;
  title: string;
  description: string;
  place: string;
  photo: string;
};

export type PlacesServerProps = {
  limitValue: number;
  pageValue: number;
  query: string;
};
