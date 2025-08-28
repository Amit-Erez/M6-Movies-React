import React, { useState } from "react";
import "./Results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilmHeader from "../../assets/FilmHeader.jpg";
import Nav from "../../components/Nav";
import ResultsTitle from "../../components/ResultsTitle";
import MovieCard from "../../components/MovieCard";
import axios from "axios";

const Results = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("DEFAULT");

  async function getMovies(entry) {
    {
      entry && setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=46d82378&s=${entry}`
      );
      const firstsix = data.Search.slice(0, 6);
      setMovies(firstsix);
      setFilter("DEFAULT");
      setLoading(false);
    }
  }

  function filterMovies(filter) {
    if (filter === "Old_to_New") {
      setMovies(movies.slice().sort((a, b) => a.Year - b.Year));
    } else if (filter === "New_to_Old") {
      setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
    } else if (filter === "By_Title_A-Z") {
      setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
    } else if (filter === "By_Title_Z-A") {
      setMovies(movies.slice().sort((a, b) => b.Title.localeCompare(a.Title)));
    }
    setFilter(filter);
  }

  function showResults() {
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            key={movie.imdbID}
          />
        ))}
      </>
    );
  }

  return (
    <div>
      <header>
        <Nav />
        <ResultsTitle onSearch={getMovies} />
        <figure className="bg__img--wrapper">
          <img src={FilmHeader} className="bg__img .image-fade-bottom" alt="" />
        </figure>
      </header>
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__bar">
              <h1 className="search__info">Search Results:</h1>
              <select
                id="filter"
                value={filter}
                onChange={(event) => filterMovies(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="By_Title_A-Z" className="sort__option">
                  By Title A-Z
                </option>
                <option value="By_Title_Z-A" className="sort__option">
                  By Title Z-A
                </option>
                <option value="Old_to_New" className="sort__option">
                  Old to New
                </option>
                <option value="New_to_Old" className="sort__option">
                  New to Old
                </option>
              </select>
            </div>
            <div className="movies__list--container">
              {loading ? (
                <FontAwesomeIcon icon="fa-solid fa-spinner movies__loading--spinner" />
              ) : (
                <div className="movies__list">{showResults()}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
