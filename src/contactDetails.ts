export type ContactMethod = "matrix" | "phone" | "email" | "address";

export type ContactDetail = {
  method: ContactMethod;
  url?: string;
  data: string;
};

export type ContactDetails = ContactDetail[];

export const contactDetails: ContactDetails = [
  {
    method: "phone",
    data: "+31 6 83968615",
    url: "tel: +31 6 83968615",
  },
  {
    method: "matrix",
    url: "https://matrix.to/#/@starlederer:matrix.org",
    data: "@starlederer:matrix.org",
  },
  {
    method: "email",
    url: "mailto: germans.lederers@gmail.com",
    data: "germans.lederers@gmail.com",
  },
  {
    method: "address",
    data: "Netherlands or all of EU",
  },
];

export default contactDetails;
