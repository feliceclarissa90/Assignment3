import './Experience.css'
import Header from '../../components/header/Header';
import ExperienceCard from '../../components/card/Card';

const Experience = () => {
    return(
        <div className="experience">
            <Header judul="Experience" />
            
            <ExperienceCard
                judul = "Owner of Made By Caramel"
                durasi = "August 2020 - Present"
                deskripsi = "Managing stocks, supplying on-demand skincare & cosmetics, as well as maintaining a good cash flow for the store."
            />

            <br></br>

            <ExperienceCard
                judul = "Vice President of HMPSSI"
                durasi = "August 2021 - August 2022"
                deskripsi = "Lead HMPSSI to organize and held events successfully."
            />

            <br></br>

            <ExperienceCard
                judul = "Mentor of Basic Coding Class"
                durasi = "September 2021 - December 2021"
                deskripsi = "Teaching new students coding, especially in C++ and Python programming language."
            />

            <br></br>
        </div>
    )
}

export default Experience;