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
            <h1>
              <span>D</span>
              <span>e</span>
              <span>s</span>
              <span>e</span>
              <span>j</span>
              <span>a</span>
              <span> </span>
              <span>m</span>
              <span>e</span>
              <span> </span>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>r</span>
              <span>a</span>
              <span>t</span>
              <span>a</span>
              <span>r</span>
              <span>?</span>
            </h1>
            
            <p className="cadastro-p">Entre em contato comigo!!</p>

            <div className="cadastro">
              <label htmlFor="name">Nome:</label>
              <input type="text" name="nome" placeholder="Digite seu nome." />
              </div>

            <div className="cadastro">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" placeholder="Digite seu email." />
            </div>

            <button>Enviar</button>
            
        </div>
          </main>

          <Footer />
    </Container>
  )
}