import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/servicebg.png";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        url="/"
        btnClass="hide"/> 
        <Trip/>
        <Footer/>
        </>
    )

}
export default Service;