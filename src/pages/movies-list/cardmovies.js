import React from "react";
import { Card } from "antd";
import { Link, useNavigate, useHistory } from "react-router-dom";
import "./card.css";
const { Meta } = Card;

const CardMovies = (props) => {
  const push = (value) => {
    window.location.assign(`/movies/${value}`);
  };

  return (
    <div>
      {props.data.map((item, idx) => {
        return (
          <div className="movieCard" onClick={() => push(item.id)}>
            {/* <div> */}
            <img
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              alt={item.title}
              className="movieCardImage"
              style={{ width: "100%" }}
            />
            <div className="movieCardDescription">{item.title}</div>
            <div style={{ padding: "5px" }}>
              <small>{item.release_date}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardMovies;
