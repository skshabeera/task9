import React from "react";
import "./styles.css";
import { useState } from "react";

const singers = {
  SidSriram: [
    { name: " Nee chupe bangaramayene srivalli ", rating: "4/5" },
    { name: "Manasa Manasa ", rating: "3.5/5" }
  ],

  DeviSriPrasad: [
    {
      name: " I wanna follow follow ..follow ..you",
      rating: "5/5"
    },
    {
      name: "Nee kannu nelli samudhram ",
      rating: "4.5/5"
    }
  ],
  Taman: [
    {
      name: "laharaahi laharaahi gunde vechenaiye huhale rai ",
      rating: "3.5/5"
    },
    {
      name: "Guche gulabi laga na manasulo nidinadhe",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Taman");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>TELUGU TOLLYWOOD TIGERS</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite songs. Select a songs to listen{" "}
      </p>

      <div>
        {Object.keys(singers).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {singers[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
