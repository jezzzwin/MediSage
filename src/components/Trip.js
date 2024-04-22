import "./TripStyles.css"
import TripData from "./TripData"
import Card1 from "../assets/card1.jpg"
import Card2 from "../assets/card2.jpg"
import Card3 from "../assets/card3.jpg"

function Trip(){
    return(
    <div className="trip">
        <h1>Features</h1>
        <p>All healthcare features in one app. Explore the features in our webapp</p>
        <div className="tripcard">
            <TripData
            image={Card1}
            heading="Multiple disease prediction"
            text="Moving on to Disease Detection, the module incorporates advanced algorithms such as Random
            Forest, Convolutional Neural Networks (CNN), and Support Vector Machines (SVM) to accomplish
            robust and accurate predictions for various diseases. Incoporates diseases like Heart Disease, Brain Tumor, Kidney Disease etc.Whether the input is in the form of text
            or images, the module leverages these diverse algorithms and datasets to predict specific diseases,
            providing a versatile and effective instrument for disease diagnosis across multiple medical domains"
            />
            <TripData
            image={Card3}
            heading="Chatbot for medical assistance"
            text="The Chatbot module for disease prediction employs LSTM-RNN and SGD algorithms, permit-
            ting dynamic, sequence-based predictions by analyzing sequential patterns in medical data. As
            part of a Multiple Disease Detection Model, the chatbot engages users interactively, prompting for
            medical information and accurately predicting various diseases. This innovative approach supports
            early detection and provides personalized insights into potential health hazards, demonstrating the
            module’s transformative potential in healthcare."
            />
            <TripData
            image={Card2}
            heading="Doctor appointment system"
            text="The Doctor-Patient appointment system incorporates a variety of features to streamline healthcare
            interactions. Users, both physicians and patients, can register and schedule appointments seam-
            lessly through the Appointment System. Video Conferencing leverages WebRTC for peer-to-peer
            connections, facilitating virtual consultations at the discretion of both parties. The Patient Dash-
            board consolidates and presents patient records and data, offering a fast reference for healthcare
            providers. Reporting notes document vital prescriptions and conclusions from the doctor."
            />
        </div>
    </div>
    );
}

export default Trip;