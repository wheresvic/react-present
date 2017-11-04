import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const speech = new SpeechSynthesisUtterance();

// Set the text and voice attributes.
speech.text = text;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

speech.onend = () => {
  console.log('done speaking');
};

window.speechSynthesis.speak(speech);`;

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <h1>Text to speech</h1>
        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
