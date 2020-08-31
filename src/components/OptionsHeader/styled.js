import styled from 'styled-components'

export const Nav = styled.nav`
  flex: 1;
  @media (max-width: 1000px) {
    display: none;
  }
  > ol {
    display: flex;
    justify-content: space-evenly;
    > li {
      font-weight: 500;
      color: ${({ theme }) => theme.text};

      &:hover {
        color: var(--main);
        cursor: pointer;
      }
    }
  }
`
