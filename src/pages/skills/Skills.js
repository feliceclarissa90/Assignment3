import Header from "../../components/header/Header";
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Skills = () => {
    return(
        <div className="skills">
            <Header judul = "Skills" />

            <div className="container">
                <ul>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; C++</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; Python</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; HTML</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; SQL</li>
                </ul>

                <ul>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; Javascript</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; PHP</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; Laravel</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#68BB59",}} />&nbsp; Project Management</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;