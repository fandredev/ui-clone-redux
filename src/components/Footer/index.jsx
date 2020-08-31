import React from 'react'
import { Container  } from "./styled";
import logo from "../../assets/images/redux.svg";
import { Link } from 'react-router-dom'
const Footer =  () => {
  return (
    <Container>
      <Link to="#">
      <img src={logo} alt="Logotipo do redux" />

      </Link>
      <p>
        Copyright © 2015–2020 Dan Abramov and the Redux documentation authors.
      </p>
    </Container>
  );
}
export default Footer
