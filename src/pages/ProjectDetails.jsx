import { useParams, Link } from 'react-router-dom';
import PROJECTS from '../data/projectsData';
import Hero from '../components/Hero';
import Context from '../components/Context';
import Objective from '../components/Objective';
import Approach from '../components/Approach';
import Feature from '../components/Feature';
import Diagram from '../components/Diagram';
import Model from '../components/Model';
import Skills from '../components/Skills';
import Challenges from '../components/Challenges';
import Gallery from '../components/Gallery';
import McdMld from '../components/McdMld';
// import Deployment from '../components/Deployment';

import '../App.css';
import '../styles/Details.css';
import '../styles/Grid.css';

export default function ProjectDetails({project}){
  const { slug } = useParams();

  const projectDetails = PROJECTS.find(
    (p) => p.slug === slug
  );
      
  const Icon = projectDetails.gitIcon;
  

    return(
    <article className='details-page'> 
    <h2 className='hero-subtitle'>{projectDetails.hero.subtitle}</h2>
      <Hero
        // subtitle={projectDetails.hero.subtitle} 
        badges={projectDetails.hero.badges}
        title={projectDetails.hero.title}
        content={projectDetails.hero.content}
        cta={projectDetails.hero.cta}
        image={<img src={projectDetails.hero.image} alt="" />}
      />

      <section className='project-details'>
        <Context
          context={projectDetails.context}
          contextCards={projectDetails.contextCards}
        />

        <Objective 
          objective={projectDetails.objective} 
          objectiveCards={projectDetails.objectiveCards}
        />
        
        <Approach 
          approach={projectDetails.approach} 
          approachCards={projectDetails.approachCards}
        />
        
        <Feature 
          feature={projectDetails.feature} 
          featureCards={projectDetails.featureCards}
        />

        {projectDetails.dataModel && (
          <McdMld 
            dataModel={projectDetails.dataModel}
            dataModelCards={projectDetails.dataModelCards}
            dataModelSubtitle={projectDetails.dataModelSubtitle}
            dataModelChoices={projectDetails.dataModelChoices} 
          />
        )}
      
        {projectDetails.diagram && (
          <Diagram 
            diagram={projectDetails.diagram} 
            diagramCards={projectDetails.diagramCards}
          />
        )}
      
        {/* {projectDetails.deployment && (
          <Deployment 
            deployment={projectDetails.deployment}/>
        )} */}

        {projectDetails.model && (
          <Model 
            model={projectDetails.model}
            modelCards={projectDetails.modelCards} 
          />
        )}
      
        <Gallery 
          gallerySection={projectDetails.gallerySection} 
          gallery={projectDetails.gallery}
        />

        <div className='project-learning'>
          <Skills
            skills={projectDetails.skills}
          />

          <Challenges
            challenges={projectDetails.challenges}
          />
        </div>

        <div className='conclusion'>
          <h2 className='section-title'>Conclusion</h2>
            <p>{projectDetails.conclusion}</p>
        </div>

      </section>

      <button className='git-btn'>
        <Link 
          to={projectDetails.github}
          className='git-link'  
        >
         <p>Voir le Repository</ p>
          <Icon className='git-icon' />
        </Link>
      </button>
    </article>
    )
}