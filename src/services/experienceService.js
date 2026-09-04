import { experiences } from "../data/experiences";
export const getExperiences = (language = "es") =>
  experiences.map((experience) => ({
    ...experience,
    period: experience.period[language],
    description: experience.description[language],
    responsibilities: experience.responsibilities[language],
  }));
