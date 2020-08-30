import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  padding: 3rem;
  background: var(--main);
  color: #fff;
  text-align: center;
  @media (min-width: 550px) {
    display: block;
  }
  @media (min-width: 1000px) and (max-width:1300px){
    height: 45vh;
    padding: 5rem;
  }
  > span {
    font-size: 4rem;
    font-weight: 900;
    margin-top: 2rem;
    @media (min-width: 1000px) and (max-width:1300px){
      font-size:5rem;
    }
  }
  > p {
    line-height: 3.6rem;
    font-size: 2rem;
    @media (min-width: 1000px) and (max-width:1300px){
      font-size: 2.5rem;
      line-height: 7.6rem;
    }
  }
  > button {
    padding: 1.3rem;
    border-radius: 7px;
    outline: none;
    border: none;
    font-weight: 900;
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 2rem;

    &:hover {
      background: var(--hover-btn);
      border-color: var(--hover-btn);
    }
    @media (min-width: 550px) and (max-width: 1000px) {
      width: 25%;
    }
    @media (min-width: 1000px) and (max-width:1300px){
      width: 15%;
      font-size:1.99rem;
    }

  }
`;
