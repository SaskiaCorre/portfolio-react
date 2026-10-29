export default function Experience({pagesData}){
    return (<>
    <div className="xp-container">
        {pagesData.map((experiences) => (
            <div className="card-experience" key={experiences.title}>
                <h3>{experiences.title}</h3>
                <p>{experiences.content}</p>
            </div>
        ))}
    </div>
     </>
    )
}