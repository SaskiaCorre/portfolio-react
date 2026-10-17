import { useState } from 'react';

export default function Gallery({ gallerySection, gallery }){
  const [selectedImage, setSelectedImage] = useState(null);

    return (
    <div className="gallery">
      {gallerySection.title && (
        <h2 className="section-title">
            {gallerySection.title}
        </h2>
      )}
      {gallerySection.content && (   
        <p className="section-content">
          {gallerySection.content}
        </p>
      )}

      <div className='gallery-grid'>
        {gallery.map((gallery) => (
          <figure 
            key={gallery.title}
            className="gallery-card"
          >
            <figcaption>
              {gallery.title && (
                <h3 className='gallery-title'>
                  {gallery.title}
                </h3>
              )}
            </figcaption>
            
            <img
              key={gallery.title}
              src={gallery.image}
              alt={gallery.title}
              className='details-img'
              onClick={() => setSelectedImage(gallery)}
            /> 
            {gallery.content && (
                <p className='img-description'>
                  {gallery.content}
                </p>
              )}
                        
          </figure>
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