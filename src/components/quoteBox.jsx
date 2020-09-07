import React, { Component } from "react";
import NewQuote from "./newQuote";
import ShareIcons from "./shareIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class quoteBox extends Component {
  state = {
    currentQuote: "First quote",
    currentAuthor: "first author",
    backgroundColor: "",
  };

  getQuote = () => {
    let randomIndex;
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        randomIndex = Math.floor(Math.random() * data.quotes.length + 1);
        this.setState({ currentQuote: data.quotes[randomIndex].quote });
        this.setState({ currentAuthor: data.quotes[randomIndex].author });
      });
  };
  i = 0;

  getStyle = () => {
    const backgroundColors = ["#34eb64", "#34eb99", "#ed5a5a", "#b31212"];
    if (this.i === backgroundColors.length) this.i = 0;
    this.setState({ backgroundColor: backgroundColors[this.i] });
    this.i++;
  };

  handleClick = () => {
    this.getQuote();
    this.getStyle();
  };

  render() {
    return (
      // new quote
      <div
        id="quoteBox"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <div>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p>{this.state.currentQuote}</p>
        </div>
        <p>{this.state.currentAuthor}</p>
        <div>
          <ShareIcons />
          <button onClick={this.handleClick}>Next inspiration</button>
        </div>
      </div>
    );
  }
}

export default quoteBox;
