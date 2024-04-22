import "./ZeroStyles.css";
function Zero(props){
    return(
        <>
        <div className={props.cName}>
        <img alt="MedImg" src={props.zeroImg}/>
        </div>
        <div className="zero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
        </>
    )
}
export default Zero;