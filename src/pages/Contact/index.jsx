import { Container } from './styles'
import backgroundImg from "../../assets/images/about.jpg"
import { Footer } from '../../components/footer'
import { Menu } from '../../components/Menu'

export function Contact() {
  return (
    <Container>
              <Menu />
          <main>
            <div className='img-wrapper'>
              <img src={backgroundImg} alt="background" />
            </div>

            <div className="banner">
              <h1>Contact</h1>
            </div>
          </main>

          <Footer />
    </Container>
  )
}