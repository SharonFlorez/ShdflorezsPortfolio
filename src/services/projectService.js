import { projects } from "../data/projects";
export const getProjects = (language = "es") =>
  projects.map((project) => ({
    ...project,
    type: project.type[language],
    description: project.description[language],
  }));
