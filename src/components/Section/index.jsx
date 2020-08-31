import React from 'react'
import { Container  } from "./styled";

const Section =  () => {
  return (
    <Container>
      <ol>
        <span>Docs</span>
        <li>Getting Started</li>
        <li>Tutorial</li>
        <li>FAQ</li>
        <li>Tutorial</li>
        <li>API Reference</li>
      </ol>

      <ol>
        <span>Community</span>
        <li>Stack Overflow</li>
        <li>Feedback</li>
      </ol>

      <ol>
        <span>More</span>
        <li>Github</li>
      </ol>
    </Container>
  );
}
export default Section
