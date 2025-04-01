import "./NelerCards.css";

export function NelerCards( {title, description} ) {
    return(
        <div className="card-neler">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}