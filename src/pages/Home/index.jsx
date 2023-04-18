import { Container } from './styles'
import backgroundImg from "../../assets/images/portifolio.jpg"
import { Footer } from '../../components/footer'
import { Menu } from '../../components/Menu'


export function Home() {
  return (
      <Container>
        <Menu />
          <main>
            <div className='img-wrapper'>
              <img src={backgroundImg} alt="background" />
            </div>

            <div className="banner">
            <h1>
              <span>O</span>
              <span>l</span>
              <span>á</span>
              <span>,</span>
              <span> </span>
              <span>e</span>
              <span>u</span>
              <span> </span>
              <span>s</span>
              <span>o</span>
              <span>u</span> <br />
              <span>E</span>
              <span>d</span>
              <span>u</span>
              <span>a</span>
              <span>r</span>
              <span>d</span>
              <span>o</span>
              <span> </span>
              <span>M</span>
              <span>e</span>
              <span>d</span>
              <span>e</span>
              <span>i</span>
              <span>r</span>
              <span>o</span>
              <span>s</span>
              <span>.</span>
            </h1>
                    <p>Desenvolvedor Front-End.</p>
                    <button>Saiba mais</button>
            </div>
          </main>

        <Footer />
      </Container>
  )
}