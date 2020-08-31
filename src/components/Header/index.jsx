import React, { useEffect, useState } from 'react'
import { Container, WrapperLeft, WrapperRight } from './styled'
import logo from '../../assets/images/redux.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdSwitch } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { actViewInput, actViewNav, actHideNav } from '../../store/landing/action'
import MenuBurger from '../Burger'
import OptionsHeader from '../OptionsHeader'
import { lightTheme, darkTheme } from '../../globals/themes'
import { GlobalStyles } from '../../globals'
import { ThemeProvider } from 'styled-components'

const Header = () => {
  const dispatch = useDispatch()
  const viewInput = useSelector((state) => state.landing.viewInput)

  const [theme, setTheme] = useState('light')

  const handleSearch = () => {
    dispatch(actViewInput())
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  useEffect(() => {
    if (window.screen.width > 1000) {
      dispatch(actViewNav())
    } else {
      dispatch(actHideNav())
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Container>
        <MenuBurger />
        <WrapperLeft>
          <img src={logo} alt="Logotipo do redux" />
          {!viewInput ? <span>Redux</span> : <span>Redux</span>}
        </WrapperLeft>
        <WrapperRight>
          <OptionsHeader />
          <span>
            <i>
              <IoMdSwitch onClick={toggleTheme} size={20} />
            </i>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            onChange={() => false}
            value={'Redux Clone'}
          />

          {window.screen.width < 1000 && (
            <i>
              <AiOutlineSearch size={20} onClick={handleSearch} />
            </i>
          )}
        </WrapperRight>
      </Container>
    </ThemeProvider>
  )
}
export default Header
