export default function Hero(
  {
    subtitle, 
    badges, 
    title, 
    content, 
    image, 
    cta, 
    github, 
    gitIcon
  }
){
  return (
    <>
      <section className="hero-layout">

        <div className="hero-content">

          {subtitle && (
            <h2 className="hero-subtitle">
              {subtitle}
            </h2>
          )}

          {badges && (
            <ul className="page-badges">
              {badges.map((badge, index) => (
                <div key={index} className="badge">
                  {badge}
                </div>
              ))}
            </ul>)}

          {title && (
            <h1 className="hero-title">
              {title}
            </h1>
          )}

          {content && (
            <p className="hero-text">
              {content}
            </p>
            )}

          {cta && (
            <button className="hero-cta">
              {cta}
            </button>
          )}

          {github && (
            <div className="github">
              {github}
            </div>
            )}

          {gitIcon && (
            <div className="git-icon">
              {gitIcon}
            </div>
            )}
        </div>
        
        {image && (
          <div className="hero-image">
            {image}
          </div>        
          )}
        
      </section>
    </>
    )
}