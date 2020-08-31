import './styled.css'
import React from 'react'
import { actViewMenu } from '../../store/landing/action'
import { useDispatch } from 'react-redux'
const Burger = () => {
  const dispatch = useDispatch()
  const handleOpenMenu = () => {
    dispatch(actViewMenu())
  }
  if (window.screen.width <= 1000) {
    return (
      <>
        <input id="menu-hamburguer" type="checkbox" />
        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span onClick={handleOpenMenu} className="hamburguer"></span>
          </div>
        </label>
      </>
    )
  } else {
    return <></>
  }
}
export default Burger
