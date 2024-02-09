import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Book from "./Book";

function Library() {
  return (
    <div className="container">
      <div className="m-3">
        <h2>Books</h2>
      </div>
      <Book></Book>
    </div>
  );
}

export default Library;
