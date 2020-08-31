import styled from 'styled-components'
import { fullCenter } from '../../globals'

export const Container = styled.div`
  ${fullCenter}
  flex-flow: row wrap;
  padding: 3rem;
  text-align: center;
  @media (min-width: 520px) {
    display: block;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: baseline;
    padding: 5rem 7rem;
  }

  > section span {
    color: var(--main);
    font-size: 2.44rem;
    font-weight: 900;
    margin: 1.9rem;
    ${fullCenter}
    @media (min-width: 520px) {
      display: block;
    }
  }
  > section p {
    color: ${({ theme }) => theme.colorDarkBgMain};

    line-height: 2.4rem;
  }
`
export const WrapperTitle = styled(Container)`
  padding: 0;
  margin-top: 7rem;
  @media (min-width: 1000px) and (max-width: 1300px) {
    display: block;
    padding: 0rem;
  }
  > h4 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colorDarkBgMain};
    line-height: 0rem;
    @media (max-width: 519px) {
      font-size: 1.6rem;
    }
    @media (min-width: 520px) {
      font-size: 2.3rem;
    }
  }
`
