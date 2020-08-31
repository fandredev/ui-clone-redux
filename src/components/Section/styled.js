import styled from 'styled-components'

export const Container = styled.div`
  background: var(--bg-footer);
  padding: 2rem;

  @media (min-width: 1000px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  > ol {
    @media (min-width: 1000px) and (max-width: 1300px) {
      padding: 2rem 8rem;
    }
  }
  > ol span {
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 6rem;
    color: var(--main-footer-color);
  }

  > ol li {
    color: var(--link-color);
    margin: 1rem 0;
    &:hover {
      color: var(--main);
      text-decoration: underline;
      cursor: pointer;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
      font-size: 1.7rem;
      line-height: 2.8rem;
    }
  }
`
