import { ColorType } from "../data/colorColection";
import { iconsColection } from "../data/iconsColection";

export type UserType = {
  id: string;
  name: string;
  lastName: string;
  age: number;
  user: string;
  password: string;
  gender: "male" | "female" | "other";
  avatar: string;
};

export type CategoryType = {
  name: string;
  color: ColorType;
  icon: keyof typeof iconsColection;
};

export type NoteType = {
  id: string;
  title: string;
  text: string;
  category: CategoryType;
  user: string;
};

export type ColorPaletteType = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};
