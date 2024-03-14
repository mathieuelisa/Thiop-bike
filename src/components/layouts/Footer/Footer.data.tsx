export type TFooterLink = {
  id: number;
  label: string;
  link: string;
};

export const FIRST_FOOTER_CONTENT: TFooterLink[] = [
  {
    id: 1,
    label: "Nous contacter",
    link: "mailto:thipthiopbike@gmail.com",
  },
  {
    id: 2,
    label: "Tarifs",
    link: "/tarifs",
  },
  {
    id: 3,
    label: "Excursions",
    link: "/excursions",
  },
  {
    id: 4,
    label: "Politique de confidentialité des données",
    link: "/politique-de-confidentialite",
  },
  {
    id: 5,
    label: "Cookies",
    link: "/cookies",
  },
  {
    id: 6,
    label: "Informations légales",
    link: "/informations-legales",
  },
];
