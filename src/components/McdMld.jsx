import { useState } from 'react';

export default function McdMld({
  dataModel, 
  dataModelSubtitle, 
  dataModelCards, 
  dataModelChoices, }){
  
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="datamodel">
      {dataModel.title && (
        <h2 className="section-title">
          {dataModel.title}
        </h2>
      )}
      {dataModel.content && (   
        <p className="section-description">
          {dataModel.content}
        </p>
      )}

      <div className="datamodel-grid">
      {dataModelCards.map((dataModelCards) => (
        <div 
          key={dataModelCards.title}
          className="datamodel-card"
        >
          {dataModelCards.title && (
            <h3>{dataModelCards.title}</h3>
          )}
          {dataModelCards.image && (
            <img
              key={dataModelCards.title} 
              src={dataModelCards.image}
              alt={dataModelCards.title}   
              className='grid-img'
              onClick={() => setSelectedImage(dataModelCards)}
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
      
      {dataModelSubtitle && (
        <h3 className="datamodel-subtitle">
          { dataModelSubtitle }
        </h3>
      )}

      <div className="data-choices">
      {dataModelChoices.map((dataModelChoices) => {
        const Icon = dataModelChoices.icon;

        return (
          <div 
            key={dataModelChoices.title}
            className="datamodel-card"
          >
            {Icon && (
            <Icon className="datamodel-icon" />
            )}
            {dataModelChoices.title && (
              <h3 className="datamodel-title">{dataModelChoices.title}</h3>
            )}
            {dataModelChoices.content && (   
              <p className="section-description">
                {dataModelChoices.content}
              </p>
            )}
          </div>
        );
    })}
      </div>
    </div>
    )
}