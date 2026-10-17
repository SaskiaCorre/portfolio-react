import { Link } from "react-router-dom";

export default function GridProject({images, slug}) {
  return (
    <div className="project-preview">
      {images.map((image) => (
        <Link
          key={image.title}
          to={`/projects/${slug}`}
        >
          <img
            className='grid-card'
            src={image.image}
            alt={image.title}
          />
        
        </Link>
      ))}
    </div>
  );
}