export type TFooterLink = {
  id: number;
  label: string;
  link: string;
};

export const FIRST_FOOTER_CONTENT: TFooterLink[] = [
  {
    id: 1,
    label: "navbar.contactUs",
    link: "mailto:thiopthiopbike@gmail.com",
  },
  {
    id: 2,
    label: "navbar.prices",
    link: "/tarifs",
  },
  {
    id: 3,
    label: "navbar.excursions",
    link: "/excursions",
  },
];
