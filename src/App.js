import './styles.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Appointment from "./routes/Appointment";
import Predict from './routes/Predict';
import Heart from './routes/Heart';
import Brain from './routes/Brain';
import Signup from './routes/Signup';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/predict" element={<Predict/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/predict/heart" element={<Heart/>}/>
        <Route path="/predict/brain" element={<Brain/>}/>
      </Routes>
    </div>
  );
}

