import React, { useState } from "react";
import "../styling/Movies.css";

function Movies({ title, releaseYear, director, actor, plot, image }) {
  const [details, setDetails] = useState({
    title,
    releaseYear,
    director,
    actor,
    plot,
    image,
  });
  const [toggle, setToggle] = useState(true);
  return (
    <div className="movies">
      <div className="movies__container">
        <div className="movies__img">
          {toggle && <img src={image} />}
          {!toggle && (
            <p>
              <strong>Director: </strong> {director}
              <br />
              <strong>Actor: </strong> {actor}
              <br />
              <strong>ReleaseYear :</strong> {releaseYear}
              <br />
              <strong>Plot: </strong> {plot}
            </p>
          )}
        </div>
        <div className="movies__releasedate">
          <p>{toggle && title}</p>
        </div>
        <div className="movies__knowmore">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? "Know More" : "Back"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;
