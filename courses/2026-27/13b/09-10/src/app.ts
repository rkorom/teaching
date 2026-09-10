import { isFelnott, isFelnottWithObject } from "./helper/isFelnott";
import { Ember } from "./types/Ember";

const x: number = 5;

const nevek: Array<string> = ["a", "b", "c"];

console.log(nevek);

// typeok

const valaki: Ember = { nev: "Pisti", kor: 25 };

const emberek: Array<Ember> = [
  { nev: "Pisti", kor: 25 },
  { nev: "Jani", kor: 37 },
  { nev: "Lilla", kor: 16 },
];

const felnottek: Array<Ember> = emberek.filter((i: Ember) => isFelnott(i.kor));
console.log(felnottek);

const felnottek2: Array<Ember> = emberek.filter((i: Ember) =>
  isFelnottWithObject(i),
);
console.log(felnottek2);
