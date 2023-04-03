import Header from "../../components/header/Header";
import EducationCard from "../../components/card/Card";
import './Education.css'

const Education = () => {
    return(
        <div className="education">
            <Header judul = "Education" />
            
            <EducationCard
                judul = "Universitas Pelita Harapan"
                durasi = "August 2020 - 2024"
                deskripsi = "Bachelor's degree, Information System."
            />

            <br></br>

            <EducationCard
                judul = "Hacktiv8 Indonesia"
                durasi = "February 2023 - June 2023"
                deskripsi = "React and React Native for Front End Developer."
            />

            <br></br>

            <EducationCard
                judul = "SMA Sutomo 1"
                durasi = "2017 - 2020"
                deskripsi = "Jurusan IPA."
            />
            
            <br></br>
        </div>
    )
}

export default Education;