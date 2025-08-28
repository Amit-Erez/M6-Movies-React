import React, { useEffect, useState } from "react";
import "./Results.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilmHeader from "../../assets/FilmHeader.jpg";
import Nav from "../../components/Nav";
import MovieCard from "../../components/MovieCard";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  async function getMovies(entry) {
    {
      entry && setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=46d82378&s=${entry}`
      );
      const firstsix = data.Search.slice(0, 6);
      setMovies(firstsix);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setFilter("DEFAULT");
    }
  }

  useEffect(() => {
    if (query) {
      setShowSpinner(true);
      getMovies(query);
      const timeout = setTimeout(() => setShowSpinner(false), 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  const [entry, setEntry] = useState("");

  function onSearchKeyPress(key) {
    key === "Enter" && getMovies(entry);
  }

  const [filter, setFilter] = useState("DEFAULT");

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
      <header>
        <Nav />
        <div className="ResultsTitle__content">
          <h1 className="ResultsTitle__content--title">Browse our movies</h1>
          <div className="input-wrap">
            <input
              type="text"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              onKeyDown={(e) => onSearchKeyPress(e.key)}
              placeholder="Search by movie title or keyword"
            />
            <div className="search-wrapper">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                onClick={() => getMovies(entry)}
              />
            </div>
          </div>
        </div>
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
                <div className="movies__list">
                  <>
                    {movies.map((movie) => (
                      <div className="movie" key={movie.Id}>
                        <div className="skeleton__card">
                          <div className="poster__skeleton"></div>
                          <div className="title__skeleton">
                            <div className="title__skeleton--para"></div>
                          </div>
                          <div className="year__skeleton">
                            <div className="year__skeleton--para"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                </div>
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

{
  /* <FontAwesomeIcon icon="fa-solid fa-spinner movies__loading--spinner" /> */
}
