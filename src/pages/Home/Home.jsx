import React from "react";
import "./Home.css";
import Nav from "../../components/Nav";
import curtain from "../../assets/curtain.png";
import marquee from "../../assets/marquee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
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
            <h1 className="home__title--h1">
              America's top rated <br />
              home cinema platform!
            </h1>
            <div className="input--wrap">
              <input
                className="input"
                type="text"
                placeholder="Search by movie title or keyword"
              />
              <div className="homesearch--wrapper">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <img src={marquee} className="marquee__img" />
          </figure>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Home;
