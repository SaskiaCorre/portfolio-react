export default function Challenges({challenges}){

  const Icon = challenges.icon;
  
    return (
      <div className="challenges">
        
        {challenges.title && (
          <h2 className="card-title">
              {challenges.title}
          </h2>
        )}
        
        {challenges.description && (   
          <p className="section-description">
            {challenges.description}
          </p>
        )}
        
        {challenges.listItems && (
          <ul className="list">
            {challenges.listItems.map((listItem, index) => (
              <div key={index} className="list-item">
              {Icon && <Icon className="list-icon" />}
              <span>
                {listItem}
                </span>
              </div>
            ))}
          </ul>
        )}

      </div>
    )
}