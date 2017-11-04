import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const curl = `curl -X GET 
  --header "Accept: application/xml" 
  --header "Authorization: Bearer xxx"
  "https://api.deutschebahn.com/timetables/v1/plan/8000244/171103/15"
`;

const code = `<timetable station='Mannheim Hbf'>
<s id="-8421441755879344488-1711031540-1">
  <tl f="N" t="p" o="06" c="RB" n="38855"/>
  <dp pt="1711031540" pp="12" l="2" ppth="Mannheim-Neckarau|Mannheim-Rheinau|Schwetzingen|Oftersheim|Hockenheim|Graben-Neudorf|Friedrichstal(Baden)|Blankenloch|Karlsruhe-Hagsfeld|Karlsruhe Hbf"/>
</s>
</timetable>

<timetable station="Mannheim Hbf" eva="8000244">
<s id="-749997912917515452-1711031513-13" eva="8000244">
    <m id="r53228s" t="r" from="1711031520" to="1711031618" ts="1711031520"/>
    <m id="r477339" t="h" from="1711031502" to="1711031617" ts="1711031521"/>
    <ar ct="1711031625" l="70">
        <m id="r20265468" t="f" c="0" ts="1711022131"/>
        <m id="r20293059" t="d" c="36" ts="1711031526"/>
    </ar>
</s>`;

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <h1>Deutsche Bahn API</h1>
        <CodeBlock id="curl">
          {curl}
        </CodeBlock>
        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
