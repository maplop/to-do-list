import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@mui/material/colors";

export type ColorType = {
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

type ColorItem = {
  id: string;
  color: ColorType;
};

export const colorCollection: ColorItem[] = [
  { id: "blue", color: blue },
  { id: "red", color: red },
  { id: "green", color: green },
  { id: "yellow", color: yellow },
  { id: "purple", color: purple },
  { id: "orange", color: orange },
  { id: "pink", color: pink },
  { id: "indigo", color: indigo },
  { id: "teal", color: teal },
  { id: "grey", color: grey },
  { id: "lightBlue", color: lightBlue },
  { id: "lime", color: lime },
  { id: "amber", color: amber },
  { id: "deepPurple", color: deepPurple },
  { id: "deepOrange", color: deepOrange },
  { id: "brown", color: brown },
  { id: "cyan", color: cyan },
  { id: "lightGreen", color: lightGreen },
  { id: "blueGrey", color: blueGrey },
];
