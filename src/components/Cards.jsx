import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios
          .get('https://restcountries.com/v3.1/all#')
          .then((res) => setCards(res.data))
      }, [])
      const handleClick = event => {
     
        console.log(event.currentTarget);
    
           <Link to={`/users/${cards.idd.suffixes}`}> {cards.name.common} </Link>
       
   
      };
  return (
   
    <div class="salam">
    {cards.map((card) => {
      return (
      
        <div onClick={handleClick} className="cards">
        <div className="cardDiv">
        <div>
          <img
            src={card.flags.png}
            alt="flag"
          />
        </div>
        <h4>{card.name.common}</h4>
        <p><b>Population :</b> <span>{card.population}</span></p>
        <p><b>Region :</b> <span>{card.region}</span></p>
        <p><b>Capital :</b> <span>{card.capital}</span></p>
      
      </div>
        </div>
      )
    })}
  </div>

  );
};

export default Cards;