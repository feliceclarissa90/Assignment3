import './Navigation.css'
import profile from "./../assets/profile.jpeg"
import { Link } from "react-router-dom";

const Navigation = () => {

    return(
    
        <div className="sidenav">
            <div className="wrapper">
                <img src={profile} alt="profile"/>
                <Link to="/">About</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/education">Education</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/interests">Interests</Link>
                <Link to="/awards">Awards</Link>
            </div>
        </div>
    )

}

export default Navigation;