import { skills } from "../data/skills";
import { ui } from "../data/i18n";
export const getSkills = (language = "es") =>
  skills.map((skill) => ({
    ...skill,
    category: ui[language].categories[skill.category] || skill.category,
  }));
