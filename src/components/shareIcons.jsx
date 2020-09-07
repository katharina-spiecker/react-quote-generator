import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

class shareIcons extends Component {
  state = {};
  render() {
    let iconStyle = {
      width: 30,
      height: 30,
      color: this.props.color,
    };

    return (
      <div>
        <a href="https://twitter.com" class="button">
          <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
        </a>
        <a href="https://www.facebook.com" class="button">
          <FontAwesomeIcon icon={faFacebookSquare} style={iconStyle} />
        </a>
      </div>
    );
  }
}

export default shareIcons;
