import React from "react";
import "../assets/css/Book.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Book() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/books")
      .then((response) => {
        return response.json();
      })
      .then((books) => {
        setbooks(books);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.imageUrl} alt={book.title} className="book-cover" />
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Author: {book.author}</p>
              <p className="book-genre">Genre: {book.genre}</p>
              <p className="book-year">Year: {book.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//const books = [
//  {
//    title: "Harry Potter And The Philosophers Stone",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 1997,
//    imageUrl: require("../assets/img/hp1.jpg"),
//  },
//  {
//    title: "Harry Potter And The Secret Chamber",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 1999,
//    imageUrl: require("../assets/img/hp2.jpg"),
//  },
//  {
//    title: "Harry Potter And The Prisoner of Azcaban",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 2001,
//    imageUrl: require("../assets/img/hp3.jpg"),
//  },
//  {
//    title: "Harry Potter And The Goblet of Fire",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 2003,
//    imageUrl: require("../assets/img/hp4.jpg"),
//  },
//  {
//    title: "Harry Potter And Order of Phoenix",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 2005,
//    imageUrl: require("../assets/img/hp5.jpg"),
//  },
//  {
//    title: "Harry Potter And The Half-blood Prince",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 2009,
//    imageUrl: require("../assets/img/hp6.jpg"),
//  },
//  {
//    title: "Harry Potter And The Deathly Hallows ",
//    author: "J.K.Rowling",
//    genre: "Fiction",
//    year: 2011,
//    imageUrl: require("../assets/img/hp7.jpg"),
//  },
//  {
//    title: "Red Queen",
//    author: "Victoria Aveyard",
//    genre: "Dystopian",
//    year: 2015,
//    imageUrl: require("../assets/img/rk1.jpg"),
//  },
//  {
//    title: "Glass Sword",
//    author: "Victoria Aveyard",
//    genre: "Dystopian",
//    year: 2017,
//    imageUrl: require("../assets/img/rk2.jpg"),
//  },
//  {
//    title: "Kings Cage",
//    author: "Victoria Aveyard",
//    genre: "Dystopian",
//    year: 2018,
//    imageUrl: require("../assets/img/rk3.jpg"),
//  },
//  {
//    title: "War Storm",
//    author: "Victoria Aveyard",
//    genre: "Dystopian",
//    year: 2020,
//    imageUrl: require("../assets/img/rk4.jpg"),
//  },
//];
