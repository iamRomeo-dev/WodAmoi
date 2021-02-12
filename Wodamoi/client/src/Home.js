import React from 'react';
import img7 from "./images/ccc/img7.svg";
import img8 from "./images/ccc/img8.svg";
import img9 from "./images/ccc/img9.svg";
import img10 from "./images/ccc/img10.svg";
import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <div className="containerHome">    
      <div className="aaaa">
        <Link to="workouts/Short" className="linkHome">
          <img src={img7} alt="image wod court" className="imagesHome" />
          <figcaption >- 10 min</figcaption>
        </Link>
      </div>
      
      <Link to="workouts/Middle" className="linkHome">
        <img src={img9} alt="image wod moyen" className="imagesHome" />
        <figcaption >10 - 20 min</figcaption>
      </Link>

      <Link to="workouts/Long" className="linkHome">
      <img src={img8} alt="image wod long" className="imagesHome" />
      <figcaption >+ 30 min</figcaption>
      </Link>

      <Link to="wods" className="linkHome">
      <img src={img10} alt="image tous wods" className="imagesHome" />
      <figcaption >le reste du monde</figcaption>

      </Link>
    </div>
  );
}