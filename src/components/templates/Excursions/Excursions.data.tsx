export type TExcursionDataSet = {
  id: number;
  title: string;
  time: string;
  description: string;
  image: string;
  urlPath: string;
};

export const EXCURSIONS_DATASET: TExcursionDataSet[] = [
  {
    id: 1,
    title: "excursions.first.title",
    time: "common.day",
    description: "excursions.first.description",
    image: "/assets/images/excursions/djiffer.jpeg",
    urlPath: "excursions/decouverte-de-djiffer-et-palmarin",
  },
  {
    id: 2,
    title: "excursions.first.title",
    time: "common.halfDay",
    description: "excursions.first.description",
    image: "/assets/images/excursions/djiffer.jpeg",
    urlPath: "excursions/demi-decouverte-de-djiffer-et-palmarin",
  },
  {
    id: 3,
    title: "excursions.second.title",
    time: "common.day",
    description: "excursions.second.description",
    image: "/assets/images/excursions/joal.jpeg",
    urlPath: "excursions/sur-la-route-de-joal-fadiouth",
  },
  {
    id: 4,
    title: "excursions.third.title",
    time: "common.day",
    description: "excursions.third.description",
    image: "/assets/images/excursions/village.jpeg",
    urlPath: "excursions/au-coeur-des-villages",
  },
  {
    id: 5,
    title: "excursions.third.title",
    time: "common.halfDay",
    description: "excursions.third.description",
    image: "/assets/images/excursions/village.jpeg",
    urlPath: "excursions/demi-au-coeur-des-villages",
  },
  {
    id: 6,
    title: "excursions.fourth.title",
    time: "common.halfDay",
    description: "excursions.fourth.description",
    image: "/assets/images/excursions/sambia.jpeg",
    urlPath: "excursions/sambia-dia-a-l-heure-du-coucher-du-soleil",
  },
];
