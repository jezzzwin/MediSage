import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Zero from "../components/Zero";
import HeroImg from "../assets/home1.png";
import ZeroImg from "../assets/home2.png"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Chatbot from "../components/Chat";
import Footer from  "../components/Footer";
function Home(){
    return(
        <>
        <Navbar />
        <Chatbot/>
        <Hero 
        cName="hero"
        heroImg={HeroImg}
        title="Welcome to MediSage"
        text="All healthcare facilities in one app. Predict multiple diseases through machine learning..."
        buttonText="Predict diseases"
        url="/predict"
        btnClass="show"/>
        <Zero 
        cName="zero"
        zeroImg={ZeroImg}
        title="Book your next healthcare appointment"
        text="Our product helps to schedule appointment with the doctors and consult them online..."
        buttonText="Make an appointment"
        url="/appointment"
        btnClass="show"/>     
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )

}
export default Home;