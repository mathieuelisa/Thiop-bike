type TNavbarContent = {
  label: string;
  link: string;
};

export const NAVBAR_CONTENT_FIRST_PART: TNavbarContent[] = [
  {
    label: "navbar.home",
    link: "/",
  },
  {
    label: "navbar.excursions",
    link: "/excursions",
  },
];

export const NAVBAR_CONTENT_SECOND_PART: TNavbarContent[] = [
  {
    label: "navbar.prices",
    link: "/tarifs",
  },
  {
    label: "navbar.team",
    link: "/teams",
  },
];

export const NAVBAR_CONTENT_MOBILE: TNavbarContent[] = [
  {
    label: "navbar.home",
    link: "/",
  },
  {
    label: "navbar.excursions",
    link: "/excursions",
  },
  {
    label: "navbar.prices",
    link: "/tarifs",
  },
  {
    label: "navbar.team",
    link: "/teams",
  },
];
