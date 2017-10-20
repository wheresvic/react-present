import React from 'react';

const imgSrc = require('./videos/plcd-tech-talk-demo.mov');


export default class Demo extends React.Component {
  render() {
    return (
      <div>
         <video width="100%" height="100%" controls>
           <source src={imgSrc} />
          </video>
      </div>
    );
  }
}
