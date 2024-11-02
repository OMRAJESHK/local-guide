export const validateFullName = (fullName: string) => {
  return /^[a-zA-Z\s]{3,}$/.test(fullName)
    ? ""
    : "Full name must contain only letters and spaces, and be at least 3 characters.";
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return /^[6-9]\d{9}$/.test(phoneNumber);
};

export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ? ""
    : "Please enter a valid email address.";
};

export const validateLocation = (location: string) => {
  return location ? "" : "Location cannot be empty.";
};

export const validatePlaceTitle = (name: string) => {
  return /^[a-zA-Z\s]{3,}$/.test(name);
};

export const validatePlaceAddress = (address: string) => {
  return /^[a-zA-Z\s]{3,}$/.test(address);
};

export const validatePlacesCategory = (category: string) => {
  return /^[a-zA-Z\s]{3,}$/.test(category);
};

export const validatePlacesDescription = (desc: string) => {
  return /^[a-zA-Z\s]{3,}$/.test(desc);
};

export const validatePlacesKnownFor = (knownFor: string) => {
  return /^[a-zA-Z\s]{3,}$/.test(knownFor);
};
export const validatePlacesMapLink = (mapLink: string) => {
  return mapLink.trim().length > 0;
};
