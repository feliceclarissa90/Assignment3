import './Navigation.css'
import profile from "./../../assets/profile.jpeg"
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return(
    
        <div className="sidenav">
            <div className="wrapper">
                <img src={profile} alt="profile"/>
                <NavLink to="/">About</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/interests">Interests</NavLink>
                <NavLink to="/awards">Awards</NavLink>
            </div>
        </div>
    )

}

export default Navigation;