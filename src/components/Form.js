import "./FormStyles.css"
function Form(props){
    return(     
       <div>
        <label>{props.label}
        </label>
        <input placeholder={props.placeholder} type={props.type} name={props.name} value={props.value} src={props.src} accept="image/*"/>
      </div>
       

    );
   
}    

export default Form;