import { useState } from 'react';

export default function Diagram({diagram, diagramCards}){
  
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="diagram">
      {diagram.title && (
        <h2 className="section-title">
          {diagram.title}
        </h2>
      )}
      {diagram.content && (   
        <p className="section-description">
          {diagram.content}
        </p>
      )}

      <div className="diagram-grid">
      {diagramCards.map((diagramCards) => (
        <div 
          key={diagramCards.title}
          className="diagram-card"
        >
          {diagramCards.title && (
            <h3>{diagramCards.title}</h3>
          )}
          {diagramCards.content && (
            <p>{diagramCards.content}</p>
          )}
          {diagramCards.image && (
            <img
              key={diagramCards.title} 
              src={diagramCards.image}
              alt={diagramCards.title}  
              className='diagram-img'
              onClick={() => setSelectedImage(diagramCards)}
            />
          )}
        </div>
      ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              {/* × */}
             <span>&#9949;</span> 
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <p>{selectedImage.title}</p>

          </div>

        </div>
      )}
    </div>
    )
}