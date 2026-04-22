import React from 'react';
import './TechStack.css';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaLayerGroup,
  FaCogs,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiVuedotjs,
  SiVitest,
  SiJest,
  SiVite,
  SiWebpack,
  SiJira,
  SiTailwindcss,
} from 'react-icons/si';

const TechStack = () => {
  const techItems = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vue.js', icon: <SiVuedotjs /> },
    { name: 'Zustand', icon: <FaLayerGroup /> },
    { name: 'TanStack', icon: <FaCogs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'REST API / MCP', icon: <FaDatabase /> },
    { name: 'Vitest', icon: <SiVitest /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Webpack', icon: <SiWebpack /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Figma', icon: <FaFigma /> },
  ];

  return (
    <section className="tech-stack container section" id="tech-stack">
      <h2 className="section__title">My Tech Stack</h2>

      <div className="tech-stack__container">
        {techItems.map((tech, index) => (
          <div className="tech-stack__item" key={index}>
            <div className="tech-stack__icon">{tech.icon}</div>
            <h3 className="tech-stack__name">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
