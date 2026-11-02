export default function Deployment({deployment, deploymentCards}) {
    return (
    <div className="deployment">
        {deployment.title && (
            <h2 className="section-title">
                {deployment.title}
            </h2>
        )}
        {deployment.description && (   
            <p className="section-description">
                {deployment.description}
            </p>
        )}

        <div className='deployment-grid'>
            {deploymentCards.map((deploymentCards) => {
            const Icon = deploymentCards.icon;

            return (
                <div key={deploymentCards.title}
                    className='deployment-card'
                >
                <Icon className="feature-icon" />
                {deploymentCards.title && (
                    <h3>{deploymentCards.title}</h3>
                )}
                {deploymentCards.description && ( 
                    <p>{deploymentCards.description}</p>
                )}
        </div>
     );
    })}      
        </div>
    </div>

    )
}