import React, { Component } from "react";
import QuoteBox from "./components/quoteBox";
import "./App.css";

class App extends Component {
  state = {
    currentColor: "#3A86FF",
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.currentColor }}>
        <QuoteBox
          currentColor={this.state.currentColor}
          onColorUpdate={this.handleColorUpdate}
        />
      </div>
    );
  }

  i = 0;
  handleColorUpdate = () => {
    const colors = ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"];
    if (this.i === colors.length) this.i = 0;
    this.setState({ currentColor: colors[this.i] });
    this.i++;
  };
}

export default App;
