import "./activity-card.css";
import React from "react";

import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import TypingActivity from "../../assets/images/typing-activity.svg";
import MathActivity from "../../assets/images/math-activity.svg";
import AlphabetActivity from "../../assets/images/alphabet-activity.svg";

const activityImages = {
  typing: TypingActivity,
  alphabet: AlphabetActivity,
  math: MathActivity,
};

const ActivityCard = (props) => {
  const { activity } = props;
  return (
    <Link to={`/activity/${activity}`} className="card">
      <ReactSVG className="card__img" src={activityImages[activity]} />
    </Link>
  );
};

export default ActivityCard;
