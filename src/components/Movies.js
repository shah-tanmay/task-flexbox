import React, { useState } from "react";
import "../styling/Movies.css";
import ReactCardFlip from "react-card-flip";

function Movies({ title, releaseYear, director, actor, plot, image }) {
  const [details, setDetails] = useState({
    title,
    releaseYear,
    director,
    actor,
    plot,
    image,
  });
  const handleIsFlipped = () => {
    setIsFlipped(!isFlipped);
  };
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="frontside__card">
        <div className="movies">
          <div className="movies__container">
            <div className="movies__img">{<img src={image} />}</div>
            <div className="movies__releasedate">
              <p>{title}</p>
            </div>
            <div className="movies__knowmore">
              <button onClick={handleIsFlipped}>Know More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="backside__card">
        <div className="movies__container">
          {
            <p>
              <strong>Director: </strong> {director}
              <br />
              <strong>Actor: </strong> {actor}
              <br />
              <strong>ReleaseYear :</strong> {releaseYear}
              <br />
              <strong>Plot: </strong> {plot}
            </p>
          }
          <div className="movies__knowmore">
            <button onClick={handleIsFlipped}>Go Back</button>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default Movies;
