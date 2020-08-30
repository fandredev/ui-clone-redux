import styled from 'styled-components'



export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 3rem;
  color: var(--main-footer-color);
  @media (min-width: 480px) {
    padding: 1rem;
  }
  @media (min-width: 1000px) and (max-width:1300px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    align-items: baseline;
    padding: 3rem 8rem;
  }
  > section figure {
    display: flex;
    justify-content: center;
  }
  > section figure img {
    margin: 1.7rem 0;
  }
  > section h5 {
    font-size: 2.3rem;
    text-align: center;
    line-height: 6.2rem;

    @media (min-width: 1000px) and (max-width:1300px) {
      font-size: 2.44rem;
    }
  }
  > section p {
    font-size: 1.522rem;
    line-height: 2.6rem;
    @media (min-width: 1000px) and (max-width:1300px) {
      font-size: 1.622rem;
      line-height: 3r;
    }
  }
`;
