import Header from "../../components/header/Header";
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return(
        <div className="skills">
            <Header judul = "Skills" />

            <div className="container">
                <ul>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; C++</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; Python</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; HTML</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; SQL</li>
                </ul>

                <ul>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; Javascript</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; PHP</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; Laravel</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#FAB9AE",}} />&nbsp; Project Management</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;