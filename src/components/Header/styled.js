import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3.5rem;
  padding: 1rem;
  grid-template-areas: 'first second';

  @media (min-width: 1000px) and (max-width: 1300px) {
    grid-template-columns: 15% 1fr;
  }
`

export const WrapperLeft = styled.div`
  grid-area: first;
  display: flex;
  align-items: center;
  > img {
    cursor: pointer;
    margin-left: 4rem;
    @media (max-width: 599px) {
      width: 15%;
      max-width: 25%;
    }
    @media (min-width: 600px) and (max-width: 999px) {
      width: 7%;
      max-width: 15%;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
      min-width: 12%;
    }
  }
  > span {
    font-weight: 700;
    cursor: pointer;
  }
`
export const WrapperRight = styled.div`
  grid-area: second;
  display:flex;
  justify-content: flex-end;
  align-items: center;
    > i {
      cursor: pointer;
    }
    > input {
      background: var(--bg-input);
      padding: 1rem;
      width: 86%;
      color: #000;
      outline: none;
      border-radius: 20px;
      border: none;

    @media (min-width: 1000px) and (max-width:1300px){
     width: 22%;
    }
  }

}
`
