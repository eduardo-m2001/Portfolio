import { Container } from "./styles"
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";

export function Footer () {
  return (
    <Container>
      <div className="footer-content">
          <p>
              Copyright &copy; 2023, eduardo-m2001 - Todos os direitos reservados
          </p>
          <div className="social-list">
              <ul>
              <li><a href="https://www.linkedin.com/in/eduardo-m2001/"><AiFillLinkedin fontSize="20px"/></a></li>
              <li><a href="https://github.com/eduardo-m2001"><AiFillGithub fontSize="20px"/></a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5522988581675"><AiOutlineWhatsApp fontSize="20px"/></a></li>
              </ul>
          </div>
      </div>
    </Container>
  )
}