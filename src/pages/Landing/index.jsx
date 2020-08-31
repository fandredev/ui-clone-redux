import React from 'react'
import Header from '../../components/Header'
import {Container} from './styled'
import Banner from '../../components/Banner'
import Main from '../../components/Main'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Warning from '../../components/Warning'
import Libraries from '../../components/Libraries'

const Landing = () => {
  return (
    <Container>
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
  );
}
export default Landing
