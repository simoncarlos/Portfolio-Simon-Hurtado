import react from "../assets/logos/logo-react.png";
import node from "../assets/logos/logo-node.png";
import typescript from "../assets/logos/logo-typescript.png";
import javascript from "../assets/logos/logo-javascript.png";
import express from "../assets/logos/logo-express.png";
import gsapLogo from "../assets/logos/logo-gsap.png";
import mongo from "../assets/logos/logo-mongo.png";
import gas from "../assets/logos/logo-gas.png";
import git from "../assets/logos/logo-git.png";
import firebase from "../assets/logos/logo-firebase.png";
import mysql from "../assets/logos/logo-mysql.png";
import java from "../assets/logos/logo-java.png";
import chart from "../assets/logos/logo-chart.png";
import css from "../assets/logos/logo-css.png";
import html from "../assets/logos/logo-html.png";
import nest from "../assets/logos/logo-nest.png";
import antigravity from "../assets/logos/logo-antigravity.png";
import claude from "../assets/logos/logo-claude.png";
import llms from "../assets/logos/logo-LLMs.png";
import next from "../assets/logos/logo-next.png";
import spring from "../assets/logos/logo-springboot.png";

const skillsData = [
  { name: "Node.js", important: true, image: node },
  { name: "NestJS", important: true, image: nest },
  { name: "React", important: true, image: react },
  { name: "Next.js", important: true, image: next },
  { name: "Java", important: false, image: java },
  { name: "Spring Boot", important: true, image: spring },
  { name: "TypeScript", important: true, image: typescript },
  { name: "Javascript(ES6)", important: true, image: javascript },
  { name: "Express", important: false, image: express },
  { name: "Mongo DB", important: false, image: mongo },
  { name: "Antigravity", important: true, image: antigravity },
  { name: "LLMs", important: true, image: llms },
  { name: "Claude Code", important: true, image: claude },
  { name: "GSAP", important: false, image: gsapLogo },
  { name: "Google App Scripts", important: false, image: gas },
  { name: "Git", important: false, image: git },
  { name: "Firebase", important: false, image: firebase },
  { name: "MySQL", important: false, image: mysql },
  { name: "CSS", important: false, image: css },
  { name: "HTML", important: false, image: html },
  { name: "Chart JS", important: false, image: chart },
];

const useSkills = () => {
  return skillsData;
};

export default useSkills;
