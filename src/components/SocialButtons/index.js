import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
  faVk,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

import "./index.scss";

const SocialButton = () => {
  return (
    <div className="social-button-contaner">
      <ul className="social-buttons">
        <li>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              {" "}
              <FontAwesomeIcon icon={faYoutube} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i>
              <FontAwesomeIcon icon={faVk} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <i>
              <FontAwesomeIcon icon={faGit} />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialButton;
