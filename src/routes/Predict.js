import Navbar from "../components/Navbar";
import PredictImg from "../assets/predictbg.jpg";
import Footer from "../components/Footer";
import Appoint from "../components/Appoint";
import Disease from "../components/Disease";
import heartImg from "../assets/heart.jpg";
import brainImg from "../assets/brain.jpg";

function Predict(){
    return(
        <>
        <Navbar />
        <Appoint
        cName="appoint"
        appointImg={PredictImg}
        title="Diseases"
        url="/"
        btnClass="hide"/>
        <div className="diseasecard">
        <Disease
        image={heartImg}
        heading="Heart Disease"
        url="/predict/heart"
        />
        <Disease
        image={brainImg}
        heading="Brain Tumor"
        url="/predict/brain"
        />
        </div>
        <Footer/>
        </>
    );

}
export default Predict;