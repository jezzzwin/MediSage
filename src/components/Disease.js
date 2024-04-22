import "./DiseaseStyles.css"
function Disease(props){
    return(
        <>
        <a href={props.url} className="d-card">
            <div className="d-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
        </a>
        </>
    )
}
export default Disease;