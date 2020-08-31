import React from 'react'
import { Container } from './styled'
import predictable from '../../assets/images/predictable.png'
import centralized from '../../assets/images/centralized.png'
import debuggable from '../../assets/images/debuggable.png'
import flexible from '../../assets/images/flexible.png'

const Main = () => {
  return (
    <Container>
      <section>
        <figure>
          <img src={predictable} alt="Imagem ilustrativa de um check" />
        </figure>
        <h5>Predictable</h5>
        <p>
          Redux helps you write applications that{' '}
          <strong>behave consistently,</strong> run in different environments
          (client, server, and native), and are <strong>easy to test.</strong>
        </p>
      </section>
      <section>
        <figure>
          <img src={centralized} alt="Imagem ilustrativa de blocos de cubo mágico" />
        </figure>
        <h5>Centralized</h5>

        <p>
          Centralizing your application's state and logic enables powerful
          capabilities like <strong>undo/redo, state persistence</strong>, and much
          more.
        </p>
      </section>
      <section>
        <figure>
          <img src={debuggable} alt="Imagem ilstrativa de um besouro numa mira" />
        </figure>

        <h5>Debuggable</h5>

        <p>
          The Redux DevTools make it easy to trace{' '}
          <strong>
            when, where, why, and how your application's state changed.
          </strong>{' '}
          Redux's architecture lets you log changes, use{' '}
          <strong>"time-travel debugging",&nbsp;</strong>
          and even send complete error reports to a server.
        </p>
      </section>
      <section>
        <figure>
          <img src={flexible} alt="Imagem ilstrativa de engrenagens" />
        </figure>
        <h5>Flexible</h5>

        <p>
          Redux <strong>works with any UI layer,</strong> and has{' '}
          <strong>a large ecosystem of addons</strong> to fit your needs.
        </p>
      </section>
    </Container>
  )
}
export default Main
