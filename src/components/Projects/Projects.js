import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BreakpointMasonry from '../BreakpointMasonry/BreakpointMasonry';
import TechnologyChip from '../TechnologyChip/TechnologyChip';
import ProjectCard from '../ProjectCard/ProjectCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    display: 'flex',
    maxWidth: '100vw',
  },
}));

const projects = [
  {
    name: 'Tisn',
    coverPhoto: 'tisn.png',
    description:
      "The introverts' social network is a social media application that I created to try and solve a problem that has bothered me for years, which is the apparent difficulty that exists to meet people and make new friends on this modern world",
    technologies: [
      <TechnologyChip name="React" icon="react.png" />,
      <TechnologyChip name="Node.js" icon="node-js.png" />,
      <TechnologyChip name="MongoDB" icon="mongodb.png" />,
    ],
    repository: 'https://github.com/Tisn/tisn.app',
    live: 'https://tisn.app',
  },
  {
    name: 'Forem',
    coverPhoto: 'forem.png',
    description:
      "For empowering community is the open source software which powers dev.to. I've contributed to this project as part of the MLH Fellowship",
    technologies: [
      <TechnologyChip name="Preact" icon="preact.png" />,
      <TechnologyChip name="Ruby on Rails" icon="ror.png" />,
      <TechnologyChip name="PostgreSQL" icon="psql.png" />,
    ],
    repository: 'https://github.com/forem/forem',
    live: 'https://www.forem.com',
  },
  {
    name: 'Fellowship Companion',
    coverPhoto: 'fellowship-companion.png',
    description:
      'Fellowship Companion is a web application that displays some data about the MLH Fellowship. The front end of the project has been crafted by me',
    technologies: [
      <TechnologyChip name="React" icon="react.png" />,
      <TechnologyChip name="Django" icon="django.png" />,
      <TechnologyChip name="SQLite" icon="sqlite.png" />,
    ],
    repository: 'https://github.com/MLH-Fellowship/Fellowship-Companion',
    live: 'https://fellowship-companion.netlify.app/',
  },
  {
    name: 'Chiri',
    coverPhoto: 'chiri.png',
    description:
      'Chiri is currently a small website I created to display the menu of a cafeteria. Over time, it could evolve into a full cafeteria management system',
    technologies: [
      <TechnologyChip name="React" icon="react.png" />,
      <TechnologyChip name="Ruby on Rails" icon="ror.png" />,
      <TechnologyChip name="PostgreSQL" icon="psql.png" />,
    ],
    repository: 'https://github.com/AlbertoPdRF/chiri',
    live: 'https://chiri-la-fortuna.herokuapp.com/',
  },
  {
    name: 'WCA',
    coverPhoto: 'wca.png',
    description:
      'The World Cube Association governs competitions for mechanical puzzles that are operated by twisting groups of pieces, commonly known as "twisty puzzles", the most famous one of them being the Rubik\'s Cube. I\'ve contributed significantly to its website, both as a programmer and as a project manager',
    technologies: [
      <TechnologyChip name="Ruby on Rails" icon="ror.png" />,
      <TechnologyChip name="MySQL" icon="mysql.png" />,
    ],
    repository: 'https://github.com/thewca/worldcubeassociation.org',
    live: 'https://www.worldcubeassociation.org',
  },
  {
    name: 'AMS',
    coverPhoto: 'ams.png',
    description:
      'The "Asociación Madrileña de Speedcubing" aims to promote the practice of speedcubing in the Community of Madrid, Spain. I built its website by modifying and adding some functionalities to the already existing website of the "Association Française de Speedcubing". The code was also used to build a website for the "Asociación Española de Speedcubing"',
    technologies: [
      <TechnologyChip name="Ruby on Rails" icon="ror.png" />,
      <TechnologyChip name="PostgreSQL" icon="psql.png" />,
    ],
    repository: 'https://github.com/speedcubingmadrid/speedcubingmadrid.org',
    live: 'https://www.speedcubingmadrid.org',
  },
];

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BreakpointMasonry>
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            coverPhoto={p.coverPhoto}
            name={p.name}
            description={p.description}
            technologies={p.technologies}
            repository={p.repository}
            live={p.live}
          />
        ))}
      </BreakpointMasonry>
    </div>
  );
};
export default Projects;
