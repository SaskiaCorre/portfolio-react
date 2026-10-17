import '../styles/Projects.css'
import '../styles/Grid.css'
import { Link } from 'react-router-dom';

import PROJECTS from '../data/projectsData';
import Hero from '../components/Hero';
import PAGES from '../data/pagesData';
import ProjectPreview from '../components/ProjectPreview';


const projectsPage = PAGES.projects;

export default function Projects({project, previewImages}) { 

  return (
    <article className='projects-page'>
      <h2 className='hero-subtitle'>
        {projectsPage.hero.subtitle}
      </h2>
      <Hero
        title={projectsPage.hero.title}
        content={projectsPage.hero.content}
        cta={
          <Link 
            to={projectsPage.hero.github}
            className='link'
          >
            {projectsPage.hero.cta}
          </Link>
        }
        image={<img src={projectsPage.hero.image} alt="" />}
      /> 
        {/* APERÇU DES PROJETS */}
        <section>
          {PROJECTS.map((project) => (
            <ProjectPreview
              key={project.slug}
              project={project}
            />
          ))}
        </section>
    </article>    
  );
}