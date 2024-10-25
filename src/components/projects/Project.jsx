import React from 'react';
import Heading from '../layouts/Layout';
import Card from './Card';
import { project1, project2, project3 } from '../../assets/index';

const data = [
  {
    id: 0,
    title: 'Full Stack Social Media',
    desc: 'This project is a social media application. It includes authentication, file handling, user profile updates, post creation, likes, follow suggestions, and the ability to view any user profile. It may take some time to load because free web service is used. First, click the logout button and then sign up and log in.',
    img: project1,
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    githubLink: 'https://github.com/codingwithrupesh/Social-Media',
    deployedLink: 'https://social-media-client-vert.vercel.app/login',
  },
  {
    id: 1,
    title: 'Full Stack E-commerce Website',
    desc: 'This is an e-commerce app where users can buy posters, add them to the cart, and checkout with payments. Users can select item categories and sort items. It may take some time to load because free web service is used.',
    img: project2,
    tags: ['React', 'Strapi', 'Cloudinary', 'PostgreSQL'],
    githubLink: 'https://github.com/codingwithrupesh/PosterKar-Client',
    deployedLink: 'https://poster-kart-client.vercel.app/',
  },
  {
    id: 2,
    title: 'World Atlas',
    desc: 'The World Atlas project is a React-based web app that provides detailed information about countries, including geography, population, and languages. It utilizes APIs like REST Countries to fetch real-time data. This project highlights your skills in React, API integration, and building dynamic, data-driven user interfaces.',
    img: project3,
    tags: ['React', 'Tailwind'],
    githubLink: 'https://github.com/codingwithrupesh/World-Atlas',
    deployedLink: 'https://react-country-smoky.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-8 xl:gap-y-12 md:grid-cols-2 lg:grid-cols-3 place-items-stretch'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            githubLink={el.githubLink}
            deployedLink={el.deployedLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
