import otakuStore from "../assets/otakuStore.png";
import marioBrossPage from "../assets/marioBrossPage.png";
import ticTacToeGame from "../assets/ticTacToeGame.png";
import musicPlayer from "../assets/musicPlayer.png";
import fuuudProject from "../assets/fuuudProject.png";
import musicAppProject from "../assets/musicAppProject.png";
import todoApp from "../assets/todoApp.jpg";

export const projects = [
  {
    id: 1,
    title: "OtakuStore",
    image: otakuStore,
    type: { es: "E-commerce", en: "E-commerce" },
    description: {
      es: "Un proyecto de carrito de compras para una tienda de anime y manga.",
      en: "A shopping cart project for an anime and manga store.",
    },
    technologies: ["ReactJS", "TypeScript", "Vite", "Tailwind CSS"],
    color: "coral",
    featured: true,
    githubUrl: "https://github.com/SharonFlorez/ShoppingCartProject",
    liveUrl: "https://otaku-store-shopping-cart-project.vercel.app/",
  },
  {
    id: 2,
    title: "Music Player",
    image: musicPlayer,
    type: { es: "Reproductor de Música", en: "Music Player" },
    description: {
      es: "Un reproductor de música web con interfaz moderna y funcionalidades completas.",
      en: "A modern web music player with complete features.",
    },
    technologies: ["Angular", "SCSS", "Firebase", "TypeScript"],
    color: "blue",
    featured: true,
    githubUrl: "https://github.com/SharonFlorez/music-player",
    liveUrl: "https://github.com/SharonFlorez/music-player",
  },
  {
    id: 3,
    title: "Website Mario Bross",
    image: marioBrossPage,
    type: { es: "Website", en: "Website" },
    description: {
      es: "Página web de Mario Bross creada con Tailwind CSS, mostrando habilidades en diseño y desarrollo frontend.",
      en: "Mario Bross website created with Tailwind CSS, showcasing frontend design and development skills.",
    },
    technologies: ["HTML", "Tailwind CSS"],
    color: "yellow",
    featured: false,
    githubUrl: "https://github.com/SharonFlorez/tailwindcss-mario-bross",
    liveUrl: "https://github.com/SharonFlorez/tailwindcss-mario-bross",
  },
  {
    id: 4,
    title: "Tic-tac-toe game",
    image: ticTacToeGame,
    type: { es: "Juego", en: "Game" },
    description: {
      es: "Juego de triqui desarrollado con React y CSS, ofreciendo una experiencia interactiva y divertida.",
      en: "Tic-tac-toe game developed with React and CSS, providing an interactive and fun experience.",
    },
    technologies: ["React", "CSS"],
    color: "yellow",
    featured: false,
    githubUrl: "https://github.com/SharonFlorez/triqui-game",
    liveUrl: "https://triquii-game.netlify.app/",
  },
  {
    id: 5,
    title: "MusicApp - Figma",
    image: musicAppProject,
    type: { es: "UI Design ", en: "UI Design" },
    description: {
      es: "Diseño de interfaz de usuario para una aplicación de música, creado en Figma con enfoque en experiencia de usuario.",
      en: "User interface design for a music application, created in Figma with a focus on user experience.",
    },
    technologies: ["Figma"],
    color: "yellow",
    featured: false,
    githubUrl: "",
    liveUrl:
      "https://www.figma.com/proto/6DZDk1q2sMnFn3UQJyJvM2/MusicApp-Proyect?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2",
  },
  {
    id: 6,
    title: "Fuuud - Figma",
    image: fuuudProject,
    type: { es: "UI Design ", en: "UI Design" },
    description: {
      es: "Diseño de interfaz de usuario para una aplicación de comida, creado en Figma con enfoque en experiencia de usuario.",
      en: "User interface design for a food delivery application, created in Figma with a focus on user experience.",
    },
    technologies: ["Figma"],
    color: "yellow",
    featured: false,
    githubUrl: "",
    liveUrl:
      "https://www.figma.com/proto/05IvQZUqtSWar6Ua2MfcUX/Fuuud-Proyect?node-id=20%3A591",
  },
  {
    id: 7,
    title: "To-do's app",
    image: todoApp,
    type: { es: "Herramienta", en: "Tool" },
    description: {
      es: "Sencilla aplicación web para gestionar tareas, desarrollada con React, Vite y Tailwind CSS.",
      en: "Simple web application for managing tasks, developed with React, Vite and Tailwind CSS.",
    },
    technologies: ["React", "Vite", "Tailwind CSS"],
    color: "yellow",
    featured: false,
    githubUrl: "",
    liveUrl: "https://github.com/SharonFlorez/vite-react-tailwind-to-do-app",
  },
];
