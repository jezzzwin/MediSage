import "./AppointStyles.css";
function Appoint(props){
    return(
        <>
        <div className={props.cName}>
        <img alt="MedImg" src={props.appointImg}/>
        </div>
        <div className="appoint-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        </>
    )
}
export default Appoint;