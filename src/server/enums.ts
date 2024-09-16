const isRequiredText = "field is Required";
export enum ErrorMessages {
  ID_REQUIRED = `'id' ${isRequiredText}`,
  TITLE_REQUIRED = `'title' ${isRequiredText}`,
  DESC_REQUIRED = `'description' ${isRequiredText}`,
  CATEGORY_REQUIRED = `'category' ${isRequiredText}`,
  PLACE_REQUIRED = `'place' ${isRequiredText}`,
  MAP_REQUIRED = `'map_link' ${isRequiredText}`,
  KNOWN_FOR_REQUIRED = `'known_for' ${isRequiredText}`,
}

export enum PlacesEnum {
  PLACES_GET_SUCCESS = "Place Found",

  PLACE_GETBYID_SUCCESS = "Place Found",
  PLACE_GETBYID_FAIL = "Place Not Found",

  PLACE_SAVE_SUCCESS = "Place Added Successfully",
  PLACE_SAVE_FAIL = "Place Not Saved",

  PLACE_UPDATE_SUCCESS = "Place Updated Successfully",
  PLACE_UPDATE_FAIL = "Place Not Updated",

  PLACE_DELETE_SUCCESS = "Place Deleted Successfully",
  PLACE_DELETE_FAIL = "Place Not Deleted",
}
