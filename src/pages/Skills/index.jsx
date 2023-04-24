import { Container } from './styles'
import backgroundImg from "../../assets/images/about.jpg"
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di"
import { SiTypescript, SiTailwindcss, SiAdobephotoshop } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaNode } from "react-icons/fa"
import { FiFigma } from "react-icons/fi"
import { BsBootstrapFill, BsGit, BsGithub } from "react-icons/bs"
import { SiMysql, SiJest } from "react-icons/si"


import { Footer } from '../../components/footer'
import { Menu } from '../../components/Menu'

export function Skills() {
  return (
    <Container>
              <Menu />
          <main>
            <div className='img-wrapper'>
              <img src={backgroundImg} alt="background" />
            </div>

            <div className="skills">
              <div className="box">
               <DiHtml5 className='icon'/>
               <span>Html</span>
              </div>

              <div className="box">
              <DiCss3 className='icon'/>
               <span>Css</span>
              </div>
              
              <div className="box">
              <DiJavascript className='icon'/>
               <span>Javascript</span>
              </div>
              
              <div className="box">
              <DiReact className='icon'/>
               <span>Reactjs</span>
              </div>
              
              <div className="box">
              <SiTypescript className='icon'/>
               <span>Typescript</span>
              </div>
              
              <div className="box">
              <TbBrandNextjs className='icon'/>
               <span>NextJs</span>
              </div>
              
              <div className="box">
              <SiJest className='icon'/>
               <span>Jest</span>
              </div>
              
              <div className="box">
              <FaNode className='icon'/>
               <span>Nodejs</span>
              </div>
              
              <div className="box">
              <SiMysql className='icon'/>
               <span>MySQL</span>
              </div>
              
              <div className="box">
              <BsBootstrapFill className='icon'/>
               <span>Bootstrap</span>
              </div>
              
              <div className="box">
              <SiTailwindcss className='icon'/>
               <span>Tailwind</span>
              </div>
              
              <div className="box">
              <FiFigma className='icon'/>
               <span>Figma</span>
              </div>
              
              <div className="box">
              <BsGithub className='icon'/>
               <span>GitHub</span>
              </div>
              
              <div className="box">
              <BsGit className='icon'/>
               <span>Git</span>
              </div>
              
              <div className="box">
              <SiAdobephotoshop className='icon'/>
               <span>Photoshop</span>
              </div>


            </div>
          </main>

          <Footer />
    </Container>
  )
}