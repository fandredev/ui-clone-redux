import React from 'react'
import { Wrapper } from './styles'
import logo from '../../../assets/images/redux.svg'

const Itens = () => {
  return (
    <Wrapper>
      <ol>
        <div>
          <span id="top">Redux</span>
          <img src={logo} alt="Logotipo do redux" />
        </div>
        <hr></hr>
        <li>Getting Started</li>
        <li>Tutorial</li>
        <li>API</li>
        <li>FAQ</li>
        <li>Best Practices</li>
        <li>Github</li>
        <li>Need help?</li>
      </ol>
    </Wrapper>
  )
}
export default Itens
