import React from 'react';
import Sidebar from '../sidebar';
import { musicDetails } from '../../data';

const Music = () => {
  const {
    title,
    description,
    email,
    emailLabel,
    img,
  } = musicDetails;

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="resume">
          <h1 className="resume-subhead">{title}</h1>
          <ul className="description">
            <li>{description}</li>
            <li>
              <a href={email}>{emailLabel}</a>
              for more information
            </li>
          </ul>
          <img
            src={img}
            alt="Outdoor string trio concert at Breitenbush Hot Springs, Oregon"
            className="title"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
