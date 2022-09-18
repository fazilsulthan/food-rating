import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  Indian: [
    { name: "Biriyani", rating: "5.0" },
    { name: "Aloo Gobi", rating: "4.6" },
    { name: "Chicken Tikka Masala", rating: "4.9" },
  ],
  Chinese: [
    { name: "Chicken Noodles", rating: "4.6" },
    { name: "Chicken Soup", rating: "4.2" },
  ],
  Arabic: [
    { name: "Shawarma", rating: "4.9" },
    { name: "Grilled Chicken", rating: "4.5" },
  ],
};

export default function app() {
  var [library, setlibrary] = useState("Indian");
  function foodLibrary(event) {
    setlibrary(event);
  }
  return (
    <div className="app">
      <h1>Good food🍲</h1>
      <p>These app show ratings of my favourite foods out of 5.</p>
      <p>Click each button to view 👇🏽</p>
      <div>
        {Object.keys(foodDictionary).map((event) => (
          <button
            onClick={() => foodLibrary(event)}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "10px",
            }}
          >
            {event}
          </button>
        ))}
      </div>
      <br />
      <div>
        <ul>
          {foodDictionary[library].map((food) => (
            <li
              style={{
                listStyle: "none",
                margin: "0.5rem",
                padding: "0.5rem",
              }}
            >
              <div>🍽️ {food.name}</div>
              <div>Rating-{food.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
