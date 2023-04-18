import { useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function showMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Container>
      <div className={`container ${menuOpen ? 'show-menu' : ''}`} onClick={showMenu}>
        <div className="hamburguer">
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <span>fechar</span>
        </div>
        <div className="sidebar">
          <nav>
            <ul className="menu">
              <li className="menu-item"><Link to="/" className="menu-link">Inicio</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">Sobre Mim</Link></li>
              <li className="menu-item"><Link to="/projects" className="menu-link">Projetos</Link></li>
              <li className="menu-item"><Link to="/skills" className="menu-link">Habilidades</Link></li>
              <li className="menu-item"><Link to="/contact" className="menu-link">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  )
}
