import React from "react";

const Search = () => {
  return (
    <div className="SearchDiv">
      <div className="sLeft">
        <button id="btnSearch">
          <i class=" icon fa-solid fa-magnifying-glass"></i>
        </button>
        <input placeholder="Searh for country..." className="InpSearch"></input>
      </div>
      <div className="sRight">
        <select name="region" id="region">
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
