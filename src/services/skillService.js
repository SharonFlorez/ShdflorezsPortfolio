import { skills } from "../data/skills";
import { ui } from "../data/i18n";

export const getSkills = (language = "es") =>
  ui[language].skills.categories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.key),
  }));
