import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

class shareIcons extends Component {
  state = {};
  render() {
    return (
      <div>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
    );
  }
}

export default shareIcons;
