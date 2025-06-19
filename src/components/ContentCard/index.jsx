import React from "react";
import "./index.css";
import HogwartsIcon from "../../assets/Icons/Hogwarts_Icon.png";
import { Link } from "react-router";

export default function ContentCard(props) {
  return (
    <div className="movie flex">
      <div className="movie-Image">
        <img src={HogwartsIcon} alt="" width={150} />
      </div>
      <div className="movie-Title">
        <Link to={`/${props.id}`}>{props.name}</Link>
      </div>
      <div className="movie-Info flex">
        <li>{props.house}</li>
        <li>{props.year}</li>
      </div>
    </div>
  );
}
