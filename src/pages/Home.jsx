// import '../styles/Hero.css';
import '../styles/Home.css';
import '../App.css';

import React from 'react';
import Card from '../components/Card';
import CardXp from '../components/CardXp';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Hero from '../components/Hero';
import PROJECTS from '../data/projectsData';
import imgHomeSmall from '../assets/img/imgHomeSmall.png';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';
import Experience from '../components/CardXp';
import { Link } from 'react-router-dom';

const homePage = PAGES.home;

const projectHero = PROJECTS.filter((project) => project.isFeatured);
  // console.log(projectHero);
  // console.log(PROJECTS);

const contactPreview = homePage.ctaTo.find(
  (item) => item.slug === "contact"
);

const aboutPreview = homePage.ctaTo.find(
  (item) => item.slug === "about"
);

const goToProjects = homePage.ctaTo.find(
  (item) => item.slug === "project"
);

export default function Home() {  
  
  return (
    <article className="home-page">
      <Hero
        subtitle={homePage.hero.subtitle}
        title={homePage.hero.title}
        badges={homePage.hero.badges}
        content={homePage.hero.content}
        cta={
          <Link 
            to={goToProjects.link}
            className='link'
          >
            {homePage.hero.cta}
          </Link>}
        image={<img src={homePage.hero.image} alt="" />}
      /> 

      <MainContent 
        title={homePage.title}
        firstcontent={homePage.firstcontent}
        secondcontent={homePage.secondcontent}
      />
      <CardXp pagesData={homePage.experiences}/>

      <MainContent title="Mes derniers projets" /> 
        <section className='projects-preview'>
          <Card projects={projectHero}/>
          <MainContent
            cta={
              <Link 
                to={goToProjects.link}
                className='link'
              >
                {goToProjects.cta}
              </Link>
            }
          /> 
        </section>

      <section className="about-preview">
        <aside className='preview-sidebar'>
          <RightSidebar image={
            <img src={aboutPreview.image} alt="" />
          } />
        </aside>

        <MainContent
          titlebis={aboutPreview.titlebis}
          firstcontent={aboutPreview.content}
          cta={
            <Link 
              to={aboutPreview.link}
              className='link'
            >
              {aboutPreview.cta}
            </Link>
          }
        />  
      </section>

      <section className="contact-preview">
        <aside className='preview-sidebar'>
          <RightSidebar image={
            <img src={contactPreview.image} alt="" />
          } />
        </aside>

        <MainContent
          titlebis={contactPreview.titlebis}
          firstcontent={contactPreview.content}
          cta={
            <Link 
              to={contactPreview.link}
              className='link'
            >
              {contactPreview.cta}
            </Link>
          }
        />        
      </section>      
    </article>
  );
}