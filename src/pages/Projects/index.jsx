import { Container } from './styles'
import backgroundImg from "../../assets/images/about.jpg"
import { Footer } from '../../components/footer'
import { Menu } from '../../components/Menu'

export function Projects() {
  return (
    <Container>
              <Menu />
          <main>
            <div className='img-wrapper'>
              <img src={backgroundImg} alt="background" />
            </div>

            <div className="banner">
              <h1>Project</h1>
            </div>
          </main>

          <Footer />
    </Container>
  )
}