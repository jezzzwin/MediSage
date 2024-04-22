import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Appoint from "../components/Appoint";
import AppointImg from "../assets/predictbg.jpg";
import Form from "../components/Form";
function Brain(){
    return(
        <>
        <Navbar />
        <Appoint 
        cName="appoint"
        appointImg={AppointImg}
        title="Brain Tumor"
        url="/"
        btnClass="hide"/>  
        <div className="container">
        <form className="form">
        <h1>Enter the details!</h1>
        <div className="fields">
         <Form
          placeholder="Patient Name"
          type="file"
          label="Upload MRI Scan:"
          src=""
         />
         </div>
         <input type="submit"/>
        </form>
        </div> 
        <Footer/>
        </>
    )
    }
 
export default Brain;