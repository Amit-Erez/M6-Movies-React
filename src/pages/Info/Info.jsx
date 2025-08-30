import React, { useEffect, useState } from "react";
import "./Info.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Nav";
import Rating from "../../ui/Rating";
import FilmHeader from "../../assets/FilmHeader.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  async function getInfo() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=46d82378&i=${id}`
    );
    setMovie(data);
  }

  useEffect(() => {
    setShowSpinner(true)
    getInfo();
    const timeout = setTimeout(() => setShowSpinner(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return showSpinner ? (
      <>
        <figure className="bg__img--wrapper">
          <img src={FilmHeader} className="bg__img .image-fade-bottom" alt="" />
        </figure>
        <div className="loading__spinner">
          <FontAwesomeIcon icon="fa-solid fa-spinner" />
        </div>
      </>
    ) : (
    <div>
      <header className="info__header">
        <Nav />
        <figure className="bg__img--wrapper">
          <img src={FilmHeader} className="bg__img .image-fade-bottom" alt="" />
        </figure>
      </header>
      <section id="info__section">
        <div className="info__container">
          <div className="row">
            <div className="movie__selected--box">
               <div className="back__arrow--box">
              <div className="back__arrow--wrapper" onClick={() => {navigate(-1)}}>
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-left"
                  className="back__arrow--img"
                />
              </div>
              <h1>Back</h1>
            </div>
              <div className="movie__selected">
                <figure className="movie__selected--figure">
                  <img
                    src={movie.Poster}
                    alt=""
                    className="movie__selected--figureImg"
                  />
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title">{movie.Title}</h2>
                  <div className="movie__selected--rating">
                    <Rating rating={movie.imdbRating} />
                  </div>
                  <div className="movie__selected--details">
                    <p>{movie.Year}</p>
                    <p>{movie.Runtime}</p>
                    <p>{movie.Genre}</p>
                    <p className="lang">{movie.Language}</p>
                  </div>
                  <div className="movie__selected--plot">
                    <h3 className="movie__plot--title">Summary</h3>
                    <div className="movie__plot--para">{movie.Plot}</div>
                  </div>
                  <div className="info__btns">
                    <button className="btn">Rent</button>
                    <button className="btn">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
