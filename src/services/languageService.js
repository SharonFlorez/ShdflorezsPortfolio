import { languages } from "../data/languages";

export const getLanguages = (language = "es") =>
  languages.map((item) => ({
    name: item.name[language],
    level: item.level[language],
  }));
