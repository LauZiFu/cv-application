import { format } from "date-fns";

const camelToTitleCase = (str: string) => {
  return (
    str.slice(0, 1).toUpperCase() +
    str.slice(1).replace(/[A-Z]/g, (letter) => ` ${letter}`)
  );
};

const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatDateResume = (start: string, end: string) => {
  return (
    (start && format(start, "MMM yyyy")) +
    (start && end && " - ") +
    (end && format(end, "MMM yyyy"))
  );
};
export { camelToTitleCase, toTitleCase, formatDateResume };
