import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>start time</p>
        <input type="range" className="" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skipForward" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
