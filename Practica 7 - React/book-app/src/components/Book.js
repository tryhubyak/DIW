import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../assets/css/Book.css";

function Book() {
  const books = [
    {
      title: "Harry Potter and The Philosofal Stone",
      author: "J.K.Rowling",
      genre: "Fiction",
      year: 1997,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      imageUrl: "https://picsum.photos/200",
    },
  ];
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

export default Book;
