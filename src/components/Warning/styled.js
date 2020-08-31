import styled from 'styled-components'
import { fullCenter } from '../../globals'

export const Container = styled.div`
  ${fullCenter}
  line-height: 2rem;
  flex-flow: row wrap;
  color: #fff;
  background: var(--banner-color);
  padding: 1rem 2rem;
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 15rem 1fr;
    padding: 2rem;
  }
  @media (min-width: 600px) {
    display: flex;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    padding: 1.5rem;
  }

  > span {
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 1rem;

    @media (min-width: 1000px) and (max-width: 1300px) {
      font-size: 1.77rem;
    }
  }

  > aside {
    border: 1px solid #fff;
    text-align: center;
    padding: 1rem 1.3rem;
    margin-top: 1rem;
    @media (min-width: 480px) {
      padding: 1rem;
      font-size: 1.3rem;
      margin: 0;
    }

    > a {
      font-weight: 700;
      font-size: 1.11em;
      text-decoration: none;
      line-height: 2.88rem;
      color: #fff;
      @media (min-width: 1000px) and (max-width: 1300px) {
        font-size: 1.22em;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
