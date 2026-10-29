export default function Objective({objective, objectiveCards}){
    return (
    <>
    <div className="objective">
        {objective.title && (
            <h2 className="section-title">
                {objective.title}
            </h2>
        )}
        {objective.content && (   
            <p className="section-description">
                {objective.content}
            </p>
        )}

        <div className='objectives-grid'>
            {objectiveCards.map((objectiveCards) => (
            <div key={objectiveCards.title}
                className='objective-card'
            >
                <h3>{objectiveCards.title}</h3>
                <p>{objectiveCards.content}</p>
            </div>
            ))}      
        </div>
    </div>
    </>
    )
}