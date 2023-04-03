import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.judul}</h3>
            <h5>{props.durasi}</h5>
            <p>{props.deskripsi}</p>
        </div>
    )
}

export default Card;