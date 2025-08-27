import React, { useState } from "react";
import "./ResultsTitle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResultsTitle = ({onSearch}) => {

  const [entry, setEntry] = useState("")

  function onSearchKeyPress(key) {
    key === "Enter" && onSearch(entry);
  }

  return (
    <div className="ResultsTitle__content">
      <h1 className="ResultsTitle__content--title">Browse our movies</h1>
      <div className="input-wrap">
        <input type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        onKeyDown={(e) => onSearchKeyPress(e.key)}  
        placeholder="Search by movie title or keyword" />
        <div className="search-wrapper">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" onClick={() => onSearch(entry)} />
        </div>
      </div>
    </div>
  );
};

export default ResultsTitle;


