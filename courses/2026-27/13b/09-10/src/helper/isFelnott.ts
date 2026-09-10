import { Ember } from "../types/Ember";

export const isFelnott = (kor: number): boolean => {
  return kor >= 18;
};

export const isFelnottWithObject = (e: Ember): boolean => {
  return e.kor >= 18;
};
