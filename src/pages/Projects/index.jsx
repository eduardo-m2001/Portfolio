import { Container } from './styles'
import backgroundImg from "../../assets/images/about.jpg"

import FoodExplorer from "../../assets/images/FoodExplorer.jpg"
import Bateria from "../../assets/images/Bateria.jpg"
import FocusTimer from "../../assets/images/FocusTimer.jpg"
import Games from "../../assets/images/Games.jpg"
import IMC from "../../assets/images/IMC.jpg"
import RocketNotes from "../../assets/images/RocketNotes.jpg"
import SPAUniverse from "../../assets/images/SPAUniverse.jpg"
import RocketMovies2 from "../../assets/images/RocketMovies2.jpg"


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

            <div className="skills">
              <div className="box">

                <div className="img-project">
                 <img src={SPAUniverse} alt="" />
                </div>

                <div className="description">
                   <span>SPA Universe</span>

                   <div className="btn">
                    <button><a href="https://github.com/eduardo-m2001/spa-universe">REPOSITÒRIO</a></button>
                   </div>
                </div>

              </div>

              <div className="box">

                <div className="img-project">
                 <img src={FoodExplorer} alt="" />
                </div>

                <div className="description">
                   <span>RocketFood</span>

                   <div className="btn">
                    <button><a href="">SITE</a></button>
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>
              
              <div className="box">

                <div className="img-project">
                 <img src={Games} alt="" />
                </div>

                <div className="description">
                   <span>Games</span>

                   <div className="btn">
                    <button><a href="">SITE</a></button>
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>

              <div className="box">

                <div className="img-project">
                 <img src={RocketMovies2} alt="" />
                </div>

                <div className="description">
                   <span>RocketMovies</span>

                   <div className="btn">
                   <button><a href="">Site</a></button>
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>

              <div className="box">

                <div className="img-project">
                 <img src={Bateria} alt="" />
                </div>

                <div className="description">
                   <span>Bateria</span>

                   <div className="btn">
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>

              <div className="box">

                <div className="img-project">
                 <img src={RocketNotes} alt="" />
                </div>

                <div className="description">
                   <span>My Notes</span>

                   <div className="btn">
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>

              <div className="box">

                <div className="img-project">
                 <img src={FocusTimer} alt="" />
                </div>

                <div className="description">
                   <span>FocusTimer</span>

                   <div className="btn">
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>

              <div className="box">

                <div className="img-project">
                 <img src={IMC} alt="" />
                </div>

                <div className="description">
                   <span>IMC</span>

                   <div className="btn">
                    <button><a href="">REPOSITÒRIO</a></button>
                   </div>

                </div>

              </div>
              


            </div>
          </main>

          <Footer />
    </Container>
  )
}