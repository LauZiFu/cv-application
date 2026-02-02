export const initialResume: Resume = {
  id: "0",
  title: "",
  personalDetails: {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    cityState: "",
    country: "",
  },
  education: { title: "", entries: {} },
  experience: { title: "", entries: {} },
};

export interface Resume {
  id: string;
  title: string;
  personalDetails: Details;
  education: { title: string; entries: EntryRecord };
  experience: { title: string; entries: EntryRecord };
}

export interface Entry {
  id: string;
  place: string;
  credential: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
}

export interface Details {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  cityState: string;
  country: string;
}

export type EntryRecord = Record<string, Entry>;
