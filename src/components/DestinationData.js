import { Component } from "react";
import Img1 from "../assets/1.jpg"
import Img2 from "../assets/2.jpg"
import "./DestinationStyles.css"

class DestinationData extends Component{
    render(){
        return(
            <div className="first-des">
            <div className="des-text">
                <p>The paper analyzes the potential of machine learning (ML) in disease prediction and its integration into healthcare systems, offering a proactive healthcare strategy. ML-driven disease prediction combines powerful algorithms and a range of healthcare information. By carefully examining this information, ML models show patterns and relationships that are sometimes hard for human therapists
to discover. These models could predict the chance of patients having numerous diseases, such as Alzheimer’s, brain tumors, breast cancer, pneumonia, heart disease, and diabetes, reaching beyond
chronic ailments. This project contains three key components. Firstly, it contains a robust illness detection system that employs machine learning (ML) methods in convolutional neural networks
(CNN) such as VGG-16, XGBoost, and Random Forest. Our proposed approach exhibits amazing accuracy and faster convergence compared to standard machine-learning disease risk prediction
techniques. It reliably predicts a spectrum of illnesses by evaluating huge datasets, exceeding existing disease risk prediction approaches. Secondly, the platform provides a chatbot that uses natural
language processing (NLP) to assist with medical inquiries. Additionally, it features an efficient appointment system for live video consultations with doctors through WebRTC. In summary, this
initiative represents an innovative mix of machine learning and healthcare services, delivering a holistic and proactive approach to healthcare.</p>
            </div>
            <div className="image">
                <img alt="img" src={Img1}/>
                <img alt="img" src={Img2}/>
            </div>
        </div>
        )
    }
}

export default DestinationData