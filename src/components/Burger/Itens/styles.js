import styled from 'styled-components'
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  transform: translateY(5px);
  transition: transform 500ms ease-in-out;
  > ol {
    padding: 4.3rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      > span {
        font-weight: 700;
        font-size: 2rem;
      }

      > img {
        order: -1;

        @media (max-width: 999px) {
          width: 10%;
        }
      }
    }
    > hr {
      margin: 2rem auto;
    }
    > li {
      font-size: 1.7rem;
      color: #916ec9;
      line-height: 4rem;
    }
  }
`
