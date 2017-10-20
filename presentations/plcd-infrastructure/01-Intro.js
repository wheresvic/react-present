import React from 'react';

const imgSrc = require('./images/intro-mic.png');

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <h1>Bosch PLCD Tech-Talk</h1>
        <img src={imgSrc} className="invert-color" />
      </div>
    );
  }
}
