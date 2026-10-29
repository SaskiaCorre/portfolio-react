export default function Deployment({title, description, steps}){
    return (
    <div className="deployment">
        {title && (
            <h2 className="section-title">
                {title}
            </h2>
        )}
        {description && (   
            <p className="section-description">
                {description}
            </p>
        )}

        <div className='deployment-grid'>
            {steps.map((step) => (
            <div key={step.title}
                className='deployment-card'
            >
                {step.title && (
                    <h3>{step.title}</h3>
                )}
                {step.content && ( 
                    <p>{step.content}</p>
                )}
            </div>
            ))}      
        </div>
    </div>
    )
}