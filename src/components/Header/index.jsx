import React, { useEffect, useState } from 'react'
import { Container, WrapperLeft, WrapperRight } from './styled'
import logo from '../../assets/images/redux.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { actViewInput, actViewNav, actHideNav } from '../../store/landing/action'
import MenuBurger from '../Burger'
import OptionsHeader from '../OptionsHeader'
import Switch from 'react-switch'

const Header = () => {
  const dispatch = useDispatch()
  const viewInput = useSelector((state) => state.landing.viewInput)

  const [theme, setTheme] = useState(false)

  const handleSearch = () => {
    dispatch(actViewInput())
  }
  useEffect(() => {
    if (window.screen.width > 1000) {
      dispatch(actViewNav())
    } else {
      dispatch(actHideNav())
    }
  }, [dispatch])

  return (
    <Container>
      <MenuBurger />
      <WrapperLeft>
        <img src={logo} alt="Logotipo do redux" />
        {!viewInput ? <span>Redux</span> : <span>Redux</span>}
      </WrapperLeft>
      <WrapperRight>
        {window.screen.width >= 1000 && <OptionsHeader />}
        {window.screen.width >= 1000 && (
          <>
            <Switch
              handleDiameter={15}
              checked={theme}
              onChange={() => setTheme(!theme)}
            />
            <input
              type="text"
              name="search"
              id="search"
              onChange={() => false}
              value={'Redux Clone'}
            />
          </>
        )}
        {window.screen.width < 1000 && (
          <i>
            <AiOutlineSearch size={20} onClick={handleSearch} />
          </i>
        )}
      </WrapperRight>
    </Container>
  )
}
export default Header
