import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/header/Header";

const About = () => {
    return(
        <div className="about">
            <Header judul="About" />
            <h5>082161621728 | feliceclarissa90@gmail.com</h5>

            <p>Hello, I'm Felice Clarissa, a driven 20 year-old. Currently enrolled at Universitas Pelita Harapan (UPH) for Bachelor's Degree in Information Systems.
                Apart of being a student, I work full-time running an online retail business called "Made By Caramel", selling beauty products and personal care.
                Beauty industry, technology, and business have always been the core of my interest.</p>

            <div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/felice-clarissa-1b6012206/"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/feliceclarissa90/Assignment3"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export default About;