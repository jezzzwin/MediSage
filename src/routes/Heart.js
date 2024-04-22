import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppointImg from "../assets/predictbg.jpg";
import Appoint from "../components/Appoint";
import Form from "../components/Form";
function Heart(){
    return(
        <>
        <Navbar />
        <Appoint 
        cName="appoint"
        appointImg={AppointImg}
        title="Heart Disease"
        url="/"
        btnClass="hide"/>   
        <div className="container">
        <form className="form">
        <h1>Enter the details!</h1>
        <div className="field">    
        <input placeholder="Age" type="text" />
         <select name="Gender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
         </select>
         <input placeholder="Constrictive pericarditis(CP)" type="text" />
         <input placeholder="Resting blood pressure(mm/Hg)" type="text" />
         <select name="slope">
            <option>ST segment during peak exercise</option>
            <option>Up sloping</option>
            <option>Flat</option>
            <option>Down sloping</option>
         </select>
         <select name="chestpain">
            <option>chest pain</option>
            <option>typical angina</option>
            <option>atypical angina</option>
            <option>non-anginal</option>
            <option>asymptomatic</option>  
         </select>
         <select name="ca">
            <option>Major Vessels</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
         </select>
         <select name="fbs">
            <option>Fasting Blood pressure</option>
            <option>greater than 120mg/dl</option>
            <option>less than 120mg/dl</option>
         </select>
         <input placeholder="Maximum heart rate achieved" type="text" />
         <select name="thal">
            <option>Thalassemia</option>
            <option>normal blood flow</option>
            <option>fixed defect</option>
            <option>reversible defect</option>
         </select>
         <input placeholder="Serum cholesterol" type="text" />
         <select name="exang">
            <option>Angina induced by exercise</option>
            <option>Yes</option>
            <option>No</option>
         </select>
         <input placeholder="oldpeak" type="text" />
         <select name="restecg">
            <option>Rest ECG</option>
            <option>Having ST-T wave abnormality</option>
            <option>Showing probable or definite left ventricular hypertrophyby Estes' criteria </option>
         </select>
         <Form
          value="Done"
          type="submit"
         />
        </div>
        </form>
        </div>       
        <Footer/>
        </>
    )
    }
 
export default Heart;