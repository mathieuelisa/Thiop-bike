export type TTarif = {
  id: number;
  numberCustomer: string;
  priceCFA: number;
  priceEUR: number;
};

export type TpriceCFAContent = {
  id: number;
  title: string;
  description: string;
  tarifs: TTarif[];
};

export const TARIF_PART: TpriceCFAContent[] = [
  {
    id: 1,
    title: "prices.second.title",
    description: "prices.second.description",
    tarifs: [
      {
        id: 1,
        numberCustomer: "2 personnes",
        priceCFA: 23000,
        priceEUR: 35,
      },
      {
        id: 2,
        numberCustomer: "3 à 4 personnes",
        priceCFA: 20000,
        priceEUR: 30,
      },
      {
        id: 3,
        numberCustomer: "5 à 7 personnes",
        priceCFA: 17000,
        priceEUR: 26,
      },
      {
        id: 3,
        numberCustomer: "8 à 10 personnes",
        priceCFA: 15000,
        priceEUR: 23,
      },
    ],
  },
  {
    id: 2,
    title: "prices.first.title",
    description: "prices.first.description",
    tarifs: [
      {
        id: 1,
        numberCustomer: "2 personnes",
        priceCFA: 36000,
        priceEUR: 55,
      },
      {
        id: 2,
        numberCustomer: "3 à 4 personnes",
        priceCFA: 33000,
        priceEUR: 50,
      },
      {
        id: 3,
        numberCustomer: "5 à 7 personnes",
        priceCFA: 29000,
        priceEUR: 45,
      },
      {
        id: 3,
        numberCustomer: "8 à 10 personnes",
        priceCFA: 26000,
        priceEUR: 40,
      },
    ],
  },
  {
    id: 3,
    title: "prices.third.title",
    description: "prices.third.description",
    tarifs: [
      {
        id: 1,
        numberCustomer: "2 personnes",
        priceCFA: 26000,
        priceEUR: 40,
      },
      {
        id: 2,
        numberCustomer: "3 à 4 personnes",
        priceCFA: 23000,
        priceEUR: 35,
      },
      {
        id: 3,
        numberCustomer: "5 à 7 personnes",
        priceCFA: 20000,
        priceEUR: 30,
      },
      {
        id: 3,
        numberCustomer: "8 à 10 personnes",
        priceCFA: 18000,
        priceEUR: 28,
      },
    ],
  },
];
