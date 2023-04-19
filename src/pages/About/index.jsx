import { Container } from './styles'
import backgroundImg from "../../assets/images/about.jpg"
import { Footer } from '../../components/footer'
import { Menu } from '../../components/Menu'

export function About() {
  return (
    <Container>
              <Menu />
          <main>
            <div className='img-wrapper'>
              <img src={backgroundImg} alt="background" />
            </div>

            <div className="banner">
            <h1>
              <span>U</span>
              <span>m</span>
              <span> </span>
              <span>p</span>
              <span>o</span>
              <span>u</span>
              <span>c</span>
              <span>o</span>
              <br />
              <span>s</span>
              <span>o</span>
              <span>b</span>
              <span>r</span>
              <span>e</span>
              <span> </span>
              <span>m</span>
              <span>i</span>
              <span>m</span>
              <span>.</span>
            </h1>
                    <p>Desde que me interessei pela área da programação, estudo diariamente para conseguir a minha primeira oportunidade. A 2 anos venho desenvolvendo diversos projetos para colocar em prática todo o meu conhecimento. Tenho facilidade de aprendizado, boa comunicação e a todo momento busco me aprimorar cada vez mais.</p>
                    <p>Estou cursando "Analise e Desenvolvimento de Sistemas" e irei me formar no segundo semestre de 2023.</p>
                    <p>Fiz diversos cursos na área da programação, dentre eles "Explorer" da Rocketseat, "B7Web" do Bonyek Lacerda, entre outros.</p>
                    <p>Possuo inglês Intermediário.</p>
            </div>
          </main>

          <Footer />
    </Container>
  )
}