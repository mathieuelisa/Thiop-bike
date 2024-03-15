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
    title: "A la découverte de Djiffer et Palmarin",
    time: "Journée",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image: "/assets/images/home/polaroid1.png",
    urlPath: "excursions/decouverte-de-djiffer-et-palmarin",
  },
  {
    id: 2,
    title: "A la découverte de Djiffer et Palmarin",
    time: "Demi-journée",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/assets/images/home/polaroid1.png",
    urlPath: "excursions/demi-decouverte-de-djiffer-et-palmarin",
  },
  {
    id: 3,
    title: " Sur la route de Joal Fadiouth",
    time: "Journée",
    description:
      "Amet nisl suscipit adipiscing bibendum est ultricies integer. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Dictum sit amet justo donec enim.",
    image: "/assets/images/home/polaroid1.png",
    urlPath: "excursions/sur-la-route-de-joal-fadiouth",
  },
  {
    id: 4,
    title: "Au coeur des villages",
    time: "Journée",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/home/polaroid1.png",
    urlPath: "excursions/au-coeur-des-villages",
  },
  {
    id: 5,
    title: "Sambia dia à l'heure du coucher du soleil",
    time: "Demi-journée",
    description:
      "Quam nulla porttitor massa id neque aliquam. Morbi leo urna molestie at elementum eu facilisis sed odio. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
    image: "/assets/images/home/polaroid1.png",
    urlPath: "excursions/sambia-dia-a-l-heure-du-coucher-du-soleil",
  },
  {
    id: 6,
    title: "Demi journée - Au coeur des villages",
    time: "Demi-journée",
    description:
      "Quam id leo in vitae turpis massa. Vitae turpis massa sed elementum. Eros donec ac odio tempor orci. Erat pellentesque adipiscing commodo elit at. Vulputate sapien nec sagittis aliquam malesuada bibendum.",
    image: "/assets/images/home/polaroid1.png",
    urlPath: "excursions/demi-au-coeur-des-villages",
  },
];
