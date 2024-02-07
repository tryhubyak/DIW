import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Library from "./components/Library";
import Book from "./components/Book";

function App() {
  return (
    <div>
      <Header></Header>
      <Library></Library>
      <Book></Book>
      <Footer></Footer>
    </div>
  );
}

export default App;
