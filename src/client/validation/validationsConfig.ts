import { type validationsConfigType } from "../types";
import {
  validatePhoneNumber,
  validatePlaceTitle,
  validatePlaceAddress,
  validatePlacesCategory,
  validatePlacesDescription,
  validatePlacesKnownFor,
  validatePlacesMapLink,
} from "./validations";

export const validationsConfig: validationsConfigType = {
  title: validatePlaceTitle,
  place: validatePlaceAddress,
  category: validatePlacesCategory,
  description: validatePlacesDescription,
  known_for: validatePlacesKnownFor,
  map_link: validatePlacesMapLink,
  mobile: validatePhoneNumber,
};
