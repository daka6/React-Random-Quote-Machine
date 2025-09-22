import React, { useState, useEffect } from "react";







const CitasAleatorias = () => {
  const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  

  let x = Math.floor(Math.random() * 101 + 1);

  const useFetch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { quotes } = data;
        console.log(quotes[x]);
        console.log(quotes[x].author);

        let result = {
          quote: data.quotes[x],
          author: data.quotes[x].author,
        };
        console.log(result);
        setQuotes(result.quote.quote);
        setAuthor(result.quote.author);
      });
  };

  useEffect(() => {
    useFetch();
  }, []);

  const handleClick = () => {
    const newQuote = useFetch();
    setQuotes(newQuote);
  };

  return (
    <>
      <div className="quote-box" id="quote-box">
        <div className="complement"></div>

        <p className="text" id="text">
          {quotes}
        </p>
        <p className="author" id="author">
          {author}
        </p>

        <button
          className="new-quote"
          type="text"
          id="new-quote"
          onClick={handleClick}
        >
          Next
        </button>

        <a
          href="twitter.com/intent/tweet"
          target="_blank"
          className="tweet-btn btn"
          id="tweet-quote"
        >
          <i className="bi bi-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          className="intagram-btn btn"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="facebook-btn btn"
        >
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </>
  );
};

export default CitasAleatorias;
