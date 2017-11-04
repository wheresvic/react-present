import React from 'react';

import css from 'style-loader!css-loader!./slides.css';

import Intro_01 from './01-Intro';
import Architecture_02 from './02-Architecture';
import SpeechToText_03 from './03-SpeechToText';
import SpeechToText_03_1 from './03-1-SpeechToText';
import TextToSpeech_04 from './04-TextToSpeech';
import DeutscheBahnAPI_05 from './05-DeutscheBahnAPI';
import MoreExamples_06 from './06-MoreExamples';

const slideComponents = [
  Intro_01,
  Architecture_02,
  SpeechToText_03,
  SpeechToText_03_1,
  TextToSpeech_04,
  DeutscheBahnAPI_05,
  MoreExamples_06
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
