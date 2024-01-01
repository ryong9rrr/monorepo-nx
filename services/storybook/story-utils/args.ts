import { vars, classes } from "@package/themes";
import { htmlTags } from "../constants/htmlTags";

export const as = {
  options: htmlTags,
  control: "select",
};

export const padding = {
  options: Object.keys(vars.box.spacing),
  control: "select",
};

export const background = {
  options: Object.keys(vars.colors.$scale),
  control: "select",
};

export const boxShadow = {
  options: Object.keys(vars.box.shadows),
  control: "select",
};

export const borderRadius = {
  options: Object.keys(vars.box.radii),
  control: "select",
};

export const color = {
  options: Object.keys(vars.colors.$scale),
  control: "select",
};

export const fontSizeHeading = {
  options: Object.keys(classes.typography.heading),
  control: "select",
};

export const fontSizeText = {
  options: Object.keys(classes.typography.text),
  control: "select",
};
