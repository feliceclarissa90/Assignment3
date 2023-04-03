import Header from "../../components/header/Header";
import "./Awards.css";

const Awards = () => {
    return(
        <div className="awards">
            <Header judul = "Awards" />

            <ul>
                <li>2022 Juara Favorit Kelas Presentasi di Pekan Ilmiah Mahasiswa Nasional (PIMNAS).</li>
                <li>2021 1st Winner of Break the Code di SL Cup Universitas Pelita Harapan.</li>
                <li>2021 2nd Winner of Mandarin Public Speaking di SL Cup Universitas Pelita Harapan.</li>
                <li>2021 Finalist Business Case Competition di Duta Wacana Business Case Competition.</li>
                <li>2021 UPH Bronze Scholarship Awardee.</li>
            </ul>

        </div>
    )
}

export default Awards;