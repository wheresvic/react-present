import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `recognition.onstart = () => {
  console.log('voice recognition activated);
}

recognition.onend = () => {
  console.log('voice recognition ended');
  recognition.start();
}

recognition.onerror = (event) => {
  console.error(event);
}`;

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <h1>SpeechRecognition events</h1>
        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
