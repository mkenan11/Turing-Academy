import "./Cards.css";

export function Cards({ img, info_link, title, description, cardContainerColor , imgStyle}) {
  return (
    <>
      <div className="col-6">
        <div className="card">
          <div className="card_container" style={{ backgroundColor: cardContainerColor }} >
            <img src={img} className="card-img-top" alt="..." style={imgStyle} />
          </div>
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              {info_link}
            </a>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
