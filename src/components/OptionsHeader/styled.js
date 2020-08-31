import styled from 'styled-components'

export const Nav = styled.nav`
  flex: 1;
  > ol {
    display: flex;
    justify-content: space-evenly;
    > li {
      font-weight: 500;
      color: var(--main-footer-color);

      &:hover {
        color: var(--main);
        cursor: pointer;
      }
    }
  }
`
