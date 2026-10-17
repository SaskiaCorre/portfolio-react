export default function LeftSidebar({sidebar}){
    return (<>
        <ul className="sidebar-items">
            {sidebar.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}
        </ul>
        </>
    )
}