import PROJECTS from "../data/projectsData";

export default function Context({context, contextCards}){
    return (<>
    <div className="context">
        {context.title && (
            <h2 className="section-title">
                {context.title}
            </h2>
        )}
        {context.type && (   
            <p className="section-type">
                {context.type}
            </p>
        )}
        {context.content && (   
            <p className="section-description">
                {context.content}
            </p>
        )}
        {context.secondContent && (   
            <p className="section-description">
                {context.secondContent}
            </p>
        )}

        <div className="context-grid">
            {contextCards.map((contextCards) => (
                <div 
                    className="context-card" 
                    key={contextCards.title}
                >
                    {contextCards.title && (
                        <h3>{contextCards.title}</h3>
                    )}
                    {contextCards.content && (
                        <p>{contextCards.content}</p>
                    )}
                </div>
            ))}
        </div>
    </div>
     </>
    )
}
