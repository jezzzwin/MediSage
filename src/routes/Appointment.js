import Navbar from "../components/Navbar";
import Appoint from "../components/Appoint";
import AppointImg from "../assets/bg.png";
import Footer from "../components/Footer";
import Form from "../components/Form"
import "../components/FormStyles.css"
function Appointment(){
    return(
        <>
        <Navbar />
        <Appoint 
        cName="appoint"
        appointImg={AppointImg}
        title="Make an appointment"
        url="/"
        btnClass="hide"/>  
        <div className="container">
        <form className="form">
        <h1>Book here!</h1>
        <div className="field">
         <Form
          placeholder="Patient Name"
          type="textfield"
         />
    
         <Form
          placeholder="Age"
          type="textfield"
         />
         <select name="Gender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
         </select>
         <Form
          placeholder="Date"
          type="date"
         />
         <Form
          placeholder="Preferred Time"
          type="time"
         />
         <select name="Specialization">
            <option>Specialization</option>
            <option>Ophthalmology</option>
            <option>Cardiology</option>
            <option>Gastroenterology</option>
            <option>Dermatology</option>
         </select>
         <textarea
          placeholder="Medical History"
         /> 
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
export default Appointment;