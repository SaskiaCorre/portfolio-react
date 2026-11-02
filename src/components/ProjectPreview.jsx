import '../styles/Grid.css';
import '../styles/Card.css';
import { Link } from "react-router-dom";

export default function ProjectPreview({ project }) {

  const previewImages = project.gallery.filter(
    (image) => image.isInGrid
  );

  return (
    <Link
      className="project-link"
      to={`/projects/${project.slug}`}
    >
      <section className="one-project">

        {project.gridTitle && (
          <h2 className='one-project-title'>
            {project.gridTitle}
          </h2>
        )}
        
        {project.gridDescription && (
          <p className='one-project-cta'>
            {project.gridDescription}
          </p>
        )}
        
        <div className="project-preview">
          {previewImages.map((image) => (
              <img
                key={image.title}
                className='grid-card'
                src={image.image}
                alt={image.title}
              />
              
          ))}
        </div>
        
      </section>
    </Link>
  );
}     
        