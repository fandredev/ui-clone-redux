import './styled.css'
import React from 'react'
import { actViewMenu } from '../../store/landing/action'
import { useDispatch, useSelector } from 'react-redux'
const Burger = () => {
  const dispatch = useDispatch()
  const viewTabBurger = useSelector((state) => state.landing.viewTabBurger)
  const handleOpenMenu = () => {
    dispatch(actViewMenu())
  }

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
}
export default Burger
