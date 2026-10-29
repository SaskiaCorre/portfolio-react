export default function Approach({approach, approachCards}){
    return (
    <>
    <div className="approach">
        {approach.title && (
            <h2 className="section-title">
                {approach.title}
            </h2>
        )}
        {approach.content && (   
            <p className="section-description">
                {approach.content}
            </p>
        )}

        <div className='approach-grid'>
            {approachCards.map((approachCards) => (
            <div key={approachCards.title}
                className='approach-card'
            >
                {approachCards.title && (
                    <h3>{approachCards.title}</h3>
                )}
                {approachCards.content && ( 
                    <p>{approachCards.content}</p>
                )}
            </div>
            ))}      
        </div>
    </div>
    </>
    )
}