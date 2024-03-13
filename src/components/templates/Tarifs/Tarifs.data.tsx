type TTarif = {
  id: number;
  numberCustomer: string;
  priceCFA: number;
  priceEUR: number;
};

type TpriceCFAContent = {
  id: number;
  title: string;
  description: string;
  tarifs: TTarif[];
};

export const TARIF_PART: TpriceCFAContent[] = [
  {
    id: 1,
    title: "Excursion à la journée",
    description: "Le tarif inclus le déjeuner (repas et boisson)",
    tarifs: [
      {
        id: 1,
        numberCustomer: "2 personnes",
        priceCFA: 1000,
        priceEUR: 30,
      },
      {
        id: 2,
        numberCustomer: "3 à 4 personnes",
        priceCFA: 1000,
        priceEUR: 60,
      },
      {
        id: 3,
        numberCustomer: "5 à 7 personnes",
        priceCFA: 8000,
        priceEUR: 90,
      },
      {
        id: 3,
        numberCustomer: "8 à 10 personnes",
        priceCFA: 8000,
        priceEUR: 30,
      },
    ],
  },
  {
    id: 2,
    title: "Excursion à la demi-journée",
    description: "Le tarif n'inclus pas déjeuner",
    tarifs: [
      {
        id: 1,
        numberCustomer: "2 personnes",
        priceCFA: 1000,
        priceEUR: 30,
      },
      {
        id: 2,
        numberCustomer: "3 à 4 personnes",
        priceCFA: 1000,
        priceEUR: 40,
      },
      {
        id: 3,
        numberCustomer: "5 à 7 personnes",
        priceCFA: 8000,
        priceEUR: 50,
      },
      {
        id: 3,
        numberCustomer: "8 à 10 personnes",
        priceCFA: 8000,
        priceEUR: 60,
      },
    ],
  },
  {
    id: 3,
    title: "Excursion au couché du soleil",
    description: "/excursions",
    tarifs: [
      {
        id: 1,
        numberCustomer: "2 personnes",
        priceCFA: 1000,
        priceEUR: 10,
      },
      {
        id: 2,
        numberCustomer: "3 à 4 personnes",
        priceCFA: 1000,
        priceEUR: 20,
      },
      {
        id: 3,
        numberCustomer: "5 à 7 personnes",
        priceCFA: 8000,
        priceEUR: 60,
      },
      {
        id: 3,
        numberCustomer: "8 à 10 personnes",
        priceCFA: 8000,
        priceEUR: 90,
      },
    ],
  },
];
