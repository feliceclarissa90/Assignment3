import Header from "../../components/header/Header";
import "./Skills.css"

const Skills = () => {
    return(
        <div className="skills">
            <Header judul = "Skills" />

            <div className="container">
                <ul>
                    <li>C++</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>SQL</li>
                </ul>

                <ul>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Project Management</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;