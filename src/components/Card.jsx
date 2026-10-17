import '../styles/Card.css';
import { Link } from 'react-router-dom';

// Arborescence du retour : img, title, shortStack, shortDescription
export default function Card({ projects }){
    return (
    <section className='cards-container'>
        {projects.map((project) => (
        <Link key={project.slug} 
              to={`/projects/${project.slug}`} 
              className='card-link'
        >
            <div className='one-card-container'>      
                <div className='card'>
                    <h2 className='card-category'>{project.category}</h2>
                    <img 
                        className='card-img' 
                        src={project.image} 
                        alt={project.title}
                    />
                    <h2 className='card-title'>
                        {project.title}
                    </h2>
                    <h2>{project.shortStack}</h2>
                    <h4 className='card-description'>
                        {project.shortDescription}
                    </h4>
                    
                </div>
            </div>   
        </Link>
        ))}           
    </section>    
    );
}