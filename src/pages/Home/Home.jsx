import React, { useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav";
import curtain from "../../assets/curtain.png";
import marquee from "../../assets/marquee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!query.trim()) return;
    navigate(`/findmovie?query=${encodeURIComponent(query)}`);
  };

  function onSearchKeyPress(e) {
  if (e.key === "Enter") handleSubmit();
}

  return  (
    <>
      <header>
        <figure className="homebg__img--wrapper">
          <img
            src={curtain}
            className="homebg__img .image-fade-bottom"
            alt=""
          />
        </figure>
        <div className="home__title">
          <figure className="marquee__img--wrapper">
            <img src={marquee} className="marquee__img" />
            <h1 className="home__title--h1">
              America's top rated <br />
              home cinema platform!
            </h1>
            <div className="input--wrap">
              <input
                className="input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onSearchKeyPress}
                placeholder="Search by movie title or keyword"
              />
              <div className="homesearch--wrapper">
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  onClick={() => handleSubmit(query)}
                />
              </div>
            </div>
          </figure>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Home;
