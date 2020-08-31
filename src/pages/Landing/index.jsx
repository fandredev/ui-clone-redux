import React from 'react'
import Header from '../../components/Header'
import { Container } from './styled'
import Banner from '../../components/Banner'
import Main from '../../components/Main'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Warning from '../../components/Warning'
import Libraries from '../../components/Libraries'
import ItensBurger from '../../components/Burger/Itens'
import { useSelector } from 'react-redux'

const Landing = () => {
  const viewTabBurger = useSelector((state) => state.landing.viewTabBurger)
  return (
    <Container id="top">
      {viewTabBurger && <ItensBurger />}

      <header>
        <Header />
      </header>
      <section>
        <Warning />
      </section>
      <section>
        <Banner />
      </section>
      <main>
        <Main />
      </main>
      <section>
        <Libraries />
      </section>
      <section>
        <Section />
      </section>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
export default Landing
