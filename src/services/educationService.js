import { education } from "../data/education";

export const getEducation = (language = "es") =>
  education.map((item) => ({ ...item, title: item.title[language] }));
