export default function Skills({skills}){

  const Icon = skills.icon;
      
    return (
      <div className="skills">
        
        {skills.title && (
          <h2 className="section-title">
              {skills.title}
          </h2>
        )}
        
        {skills.description && (   
          <p className="section-description">
            {skills.description}
          </p>
        )}
        
        {skills.listItems && (
          <ul className="list">
            {skills.listItems.map((listItem, index) => (
              <div key={index} className="list-item">
                {Icon && <Icon className="list-icon" />}
                <span>{listItem}</span>
              </div>
            ))}
          </ul>
        )}
        
      </div>
    )
}