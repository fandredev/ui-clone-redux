import React from 'react'
import { Container, WrapperTitle } from "./styled";
import { HiArrowCircleRight } from "react-icons/hi";
const Libraries =  () => {
  return (
    <>
    <WrapperTitle>

      <h4>Other Libraries from the Redux Team</h4>
    </WrapperTitle>
    <Container>
      <section>
        <span>React-Redux&nbsp;
        <HiArrowCircleRight />
        </span>
      <p>Official React bindings for Redux</p>
      </section>
      <section>
        <span>Redux Toolkit&nbsp;
        <HiArrowCircleRight />
        </span>
        <p>
          The official, opinionated, batteries-included toolset for efficient
          Redux development
        </p>
      </section>
    </Container>
    </>
  );
}
export default Libraries
