export default function Feature({feature, featureCards}){
    return (
    <>
    <div className="feature">
    {feature.title && (
        <h2 className="section-title">
            {feature.title}
        </h2>
    )}
    {feature.content && (   
        <p className="section-description">
            {feature.content}
        </p>
    )}
        <div className="features-grid">
            {featureCards.map((featureCards) => {
            const Icon = featureCards.icon;

            return (
                <div
                    key={featureCards.title}
                    className="feature-card"
                >
                    <Icon className="feature-icon" />
                    {featureCards.title && (
                        <h3>{featureCards.title}</h3>
                    )} 
                    {featureCards.content && (
                        <p>{featureCards.content}</p>
                    )}              
                </div>
            );
            })}
        </div>
    </div>
    </>
    )
}