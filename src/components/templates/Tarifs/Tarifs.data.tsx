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
        numberCustomer: "prices.twoPersons",
        priceCFA: 23000,
        priceEUR: 35,
      },
      {
        id: 2,
        numberCustomer: "prices.threeFourPersons",
        priceCFA: 20000,
        priceEUR: 30,
      },
      {
        id: 3,
        numberCustomer: "prices.fiveToSevenPersons",
        priceCFA: 17000,
        priceEUR: 26,
      },
      {
        id: 3,
        numberCustomer: "prices.eightToTenPersons",
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
        numberCustomer: "prices.twoPersons",
        priceCFA: 36000,
        priceEUR: 55,
      },
      {
        id: 2,
        numberCustomer: "prices.threeFourPersons",
        priceCFA: 33000,
        priceEUR: 50,
      },
      {
        id: 3,
        numberCustomer: "prices.fiveToSevenPersons",
        priceCFA: 29000,
        priceEUR: 45,
      },
      {
        id: 3,
        numberCustomer: "prices.eightToTenPersons",
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
        numberCustomer: "prices.twoPersons",
        priceCFA: 26000,
        priceEUR: 40,
      },
      {
        id: 2,
        numberCustomer: "prices.threeFourPersons",
        priceCFA: 23000,
        priceEUR: 35,
      },
      {
        id: 3,
        numberCustomer: "prices.fiveToSevenPersons",
        priceCFA: 20000,
        priceEUR: 30,
      },
      {
        id: 3,
        numberCustomer: "prices.eightToTenPersons",
        priceCFA: 18000,
        priceEUR: 28,
      },
    ],
  },
];
