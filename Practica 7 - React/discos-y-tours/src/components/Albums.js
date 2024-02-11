import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import React from "react";
import "../assets/css/Album.css";

export default function Albums() {
  const [albums, setalbums] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3060/albums")
      .then((response) => {
        return response.json();
      })
      .then((albums) => {
        setalbums(albums);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">EXPLORE ALBUMS</h1>
        <br></br>
        <div className="row album">
          {albums.map((album, index) => (
            <div className="col-12 col-md-4 col-lg-2" key={index}>
              <hr></hr>
              <p className="album-name">{album.name}</p>
              <p className="album-year">{album.year}</p>
              <p className="album-lenght">{album.lenght}</p>
              <ul className="album-songs">
                {album.songs.map((song, songIndex) => (
                  <li key={songIndex}>{song}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
