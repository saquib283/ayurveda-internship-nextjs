"use client"
import React, { useState } from "react";
import "./rating.css"
const Rating = () => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`star${selectedStars >= index ? " active" : ""}`}
            onClick={() => setSelectedStars(index)}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default Rating;