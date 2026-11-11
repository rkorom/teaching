import type { Pizza } from "./types/Pizza";

export const initPizza: Array<Pizza> = [
  {
    nev: "Margherita",
    leiras: "Paradicsomszósz, mozzarella, bazsalikom",
    ar: 2490,
    img: [
      "pizza-sonkas.jpg",
      "pizza-sonkas-2.jpg",
      "pizza-sonkas-2.jpg",
      "pizza-sonkas-2.jpg",
    ],
  },
  {
    nev: "Sonkás",
    leiras: "Paradicsomszósz, mozzarella, sonka",
    ar: 2790,
    img: ["pizza-sonkas.jpg", "pizza-sonkas-2.jpg"],
  },
  {
    nev: "Hawaii",
    leiras: "Paradicsomszósz, mozzarella, sonka, ananász",
    ar: 2990,
    img: ["pizza-sonkas.jpg", "pizza-sonkas-2.jpg"],
  },
];
