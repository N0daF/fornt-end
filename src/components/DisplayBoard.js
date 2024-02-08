import React from "react";

export const DisplayBoard = ({ numberOfMovies, getAllMovies }) => {
  return (
    <div style={{ backgroundColor: "#393E46" }} className="display-board">
      <h2 style={{ color: "white" }}>Movies Created</h2>
      <div className="number">{numberOfMovies}</div>
      <div className="btn">
        <button
          type="button"
          onClick={(e) => getAllMovies()}
          className="btn btn-warning"
        >
          Get all Movies
        </button>
      </div>
    </div>
  );
};
