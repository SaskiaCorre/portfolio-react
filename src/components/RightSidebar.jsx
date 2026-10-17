export default function RightSidebar({image}){
    return (<>
        {image && (
            <div className="main-image">
              {image}
            </div>        
          )}
        </>
    )
}