import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `const SpeechRecognition = window.SpeechRecognition 
  || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  // event is a SpeechRecognitionEvent object. 
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  processCommand(transcript);
}

recognition.start();`;

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <h1>Speech to text</h1>
        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
