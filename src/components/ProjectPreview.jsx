import '../styles/Grid.css';
import '../styles/Card.css';
import GridProject from './GridProject';

export default function ProjectPreview({ project }) {
  
  const previewImages = project.gallery.filter(
    (image) => image.isInGrid
  );

  return (
    <section className="one-project">
      <h2 className='one-project-title'>{project.gridTitle}</h2>
      <p className='one-project-cta'>{project.gridDescription}</p>

      <GridProject
        images={previewImages}
        slug={project.slug}
      />
    </section>
  );
}     
        