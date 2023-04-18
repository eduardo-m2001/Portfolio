import styled from "styled-components";

export const Container = styled.div`




.hamburguer {
    width: 3rem;
    height: 3rem;
    position: fixed;
    z-index: 100;
    right: 2rem;
    top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
  }

  .show-menu .hamburguer {
    right: 20rem;
  }

  .line {
    width: 100%;
    height: 0.2rem;
    background-color: #fff;
    box-shadow: 0.1rem 0.1rem 1px #000;
    transition: transform 1s;
  }

  .show-menu #line1 {
    transform: rotate(45deg) translate(0.6rem, 0.9rem);
  }

  .show-menu #line2 {
    opacity: 0;
    visibility: hidden;
  }

  .show-menu #line3 {
    transform: rotate(-45deg) translate(0.2rem, -0.45rem);
  }

  .hamburguer span {
    position: absolute;
    left: 3rem;
    height: 2rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a044ff;
    color: #fff;
    font-family: var(--font-action);
    opacity: 0;
  }

  .hamburguer span::before {
    content: "";
    position: absolute;
    border-right: 0.5rem solid #a044ff;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    left: -1rem;
  }

  .show-menu .hamburguer:hover span {
    opacity: 1;
  }

  .sidebar {
    width: 25rem;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.719);
    position: fixed;
    top: 0;
    right: -25rem; /* Começa fora da tela */
    transition: all 0.8s;
    z-index: 1;
  }

  .show-menu .sidebar{
    right: 0; /* Move para a direita */
  }

  .menu {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
  }

  .menu-item {
    text-align: center;
    margin-bottom: 3rem;
  }

  .menu-link {
    font-family: var(--font-action);
    font-size: 2.2rem;
    color: rgb(197, 197, 197);}

.menu-link:hover {
    color: #6a3093;

}

`

