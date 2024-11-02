export enum InputAttributesEnum {
  title = "title",
  description = "description",
  category = "category",
  place = "place",
  known_for = "known_for",
  map_link = "map_link",
  photo = "photo",
  person_known = "person_known",
  person_mobile = "person_mobile",
  remarks = "remarks",
}

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
};

export type PlaceDataType = {
  title: { value: string; error: { hasError: boolean; message: string } };
  description: { value: string; error: { hasError: boolean; message: string } };
  category: { value: string; error: { hasError: boolean; message: string } };
  place: { value: string; error: { hasError: boolean; message: string } };
  known_for: { value: string; error: { hasError: boolean; message: string } };
  photo: { value: string; error: { hasError: boolean; message: string } };
  map_link: { value: string; error: { hasError: boolean; message: string } };
  person_known: {
    value: string;
    error: { hasError: boolean; message: string };
  };
  person_mobile: {
    value: string;
    error: { hasError: boolean; message: string };
  };
  remarks: { value: string; error: { hasError: boolean; message: string } };
};

export type InputType = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: { hasError: boolean; message: string };
  listid?: string;
  listData?: DatalistItemType[];
};

export type TextareaType = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: { hasError: boolean; message: string };
};

export type defaultInputValueType = {
  value: string;
  error: { hasError: boolean; message: string };
};

export type InputElementAttributeType = {
  name:
    | InputAttributesEnum.title
    | InputAttributesEnum.description
    | InputAttributesEnum.category
    | InputAttributesEnum.place
    | InputAttributesEnum.known_for
    | InputAttributesEnum.map_link
    | InputAttributesEnum.photo
    | InputAttributesEnum.person_known
    | InputAttributesEnum.person_mobile
    | InputAttributesEnum.remarks;
  value: string;
};
export type AlertPropsType = { label: string; message: string };

export type DatalistItemType = { value: string; id: string; label: string };
export type DatalistPropType = { listid: string; listData: DatalistItemType[] };

export type validationsConfigType = {
  [key: string]: (str: string) => boolean;
  // title: (str: string) => boolean;
  // address: (str: string) => boolean;
  // category: (str: string) => boolean;
  // description: (str: string) => boolean;
  // knownFor: (str: string) => boolean;
  // mapLink: (str: string) => boolean;
  // mobile: (str: string) => boolean;
};
