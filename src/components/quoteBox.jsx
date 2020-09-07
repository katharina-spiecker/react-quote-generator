import React, { Component } from "react";
import ShareIcons from "./shareIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class quoteBox extends Component {
  state = {
    currentQuote: "Those who dare to fail miserably can achieve greatly.",
    currentAuthor: "- John F. Kennedy",
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
        this.setState({
          currentAuthor: "- " + data.quotes[randomIndex].author,
        });
      });
  };

  handleClick = () => {
    this.getQuote();
    this.props.onColorUpdate();
  };

  render() {
    return (
      // new quote
      <div id="quoteBox" style={{ color: this.props.currentColor }}>
        <div>
          <div class="row first-row">
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>{this.state.currentQuote}</p>
          </div>

          <p>{this.state.currentAuthor}</p>

          <div class="row last-row">
            <ShareIcons color={this.props.currentColor} />
            <button
              className="button"
              onClick={this.handleClick}
              style={{
                backgroundColor: this.props.currentColor,
              }}
            >
              Next inspiration
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default quoteBox;
