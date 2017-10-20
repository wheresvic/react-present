import React from 'react';

import css from 'style-loader!css-loader!./slides.css';

import Intro_01 from './01-Intro';
import Contents_02 from './02-Contents';
import Demo_03 from './03-Demo';

const slideComponents = [
  Intro_01,
  Contents_02,
  Demo_03
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
