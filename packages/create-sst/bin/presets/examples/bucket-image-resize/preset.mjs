import { patch, extend, extract, install } from "create-sst";

export default [
  extend("presets/starters/typescript-starter"),
  extract(),
  install({
    packages: ["sharp"],
    path: "api",
  }),
  install({
    packages: ["@types/sharp"],
    path: "api",
    dev: true,
  }),
];
