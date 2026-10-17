import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Model({ model, modelCards }){
  
  const [selectedImage, setSelectedImage] = useState(null);

    return (
     <div className="model">
        {model.title && (
            <h2 className="section-title">
                {model.title}
            </h2>
        )}
        {model.content && (   
            <p className="section-description">
                {model.content}
            </p>
        )}

        <div className='model-grid'>
            {modelCards.map((modelCards) => (
                <div key={modelCards.title}
                    className='model-card'
                >
                    {modelCards.title && (
                        <h3>{modelCards.title}</h3>
                    )}
                    {modelCards.content1 &&(
                        <p>{modelCards.content1}</p>
                    )}
                    {modelCards.image && (
                        <img
                            key={modelCards.title} 
                            src={modelCards.image}
                            alt={modelCards.title} 
                            className='card-img'
                            onClick={() => setSelectedImage(modelCards)}
                        />
                    )}
                    {modelCards.content2 &&(    
                        <p>{modelCards.content2}</p>
                    )}
                    {modelCards.figma && (      
                      <button className='cta-btn'>
                        <Link 
                            to={modelCards.figma}
                            className='link-to'
                        >
                          Voir la maquette
                        </Link>
                      </button>
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
              ×
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
    );
}