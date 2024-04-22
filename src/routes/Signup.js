import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../components/SignupStyles.css";

function Signup() {
    return (
        <div className="container1">
            <form className="signup">
                <h1 className='head'>Sign Up</h1>
                <div className="fields">
                    <span>
                        <FontAwesomeIcon icon={faUser} className="fa-user-icon" />
                    </span>
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="fields">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} className="fa-envelope-icon" />
                    </span>
                    <input type="email" placeholder="Email" required/>
                </div>
                <div className="fields">
                    <span>
                        <FontAwesomeIcon icon={faLock} className="fa-lock-icon" />
                    </span>
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="fields">
                    <span>
                        <FontAwesomeIcon icon={faLock} className="fa-lock-icon" />
                    </span>
                    <input type="password" placeholder="Confirm Password" required/>
                </div>
                <button type="submit">Sign Up</button>
                <p className="or">Or</p>
                <div className="icon-button">
                    <span className="facebook"><FontAwesomeIcon icon={faFacebook} /> Facebook</span>
                    <span><FontAwesomeIcon icon={faGoogle} /> Google</span>
                </div>
            </form>
        </div>
    );
}

export default Signup;
