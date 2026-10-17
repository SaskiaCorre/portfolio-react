export default function MainContent({ 
  subtitle,
  title, 
  titlebis, 
  badges,
  firstcontent, 
  secondcontent, 
  list, 
  thirdcontent, 
  fourthcontent, 
  fifthcontent,
  conclusion, 
  cta}) {

  return (
    <>
      <div className="page-content">
        {subtitle && (
          <h2 className="page-subtitle">
            {subtitle}
          </h2>
        )}

        {title && (
          <h1 className="page-title">
            {title}
          </h1>
        )}

        {titlebis && (
          <h1 className="page-title-bis">
            {titlebis}
          </h1>
        )}

        {badges && (
          <ul className="page-badges">
            {badges.map((badge, index) => (
              <li key={index} className="badge">
                {badge}
              </li>
            ))}
          </ul>)}

        {firstcontent && (
          <p className="page-text">
            {firstcontent}
          </p>
        )}

        {secondcontent && (
          <p className="page-text">
            {secondcontent}
          </p>
        )}

        {list && (
          <ul className="page-list">
            {list.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}

        {thirdcontent && (
          <p className="page-text">
            {thirdcontent}
          </p>
        )}

        {fourthcontent && (
          <p className="page-text">
            {fourthcontent}
          </p>
        )}

        {fifthcontent && (
          <p className="page-text">
            {fifthcontent}
          </p>
        )}

        {conclusion && (
          <p className="page-text">
            {conclusion}
          </p>
        )}

        {cta && (
          <button className="page-cta">
            {cta}
          </button>
        )}
      </div>   
    </>
    )
  }