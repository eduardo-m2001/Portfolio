import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --font-primary: "Baloo Da 2", sans-serif;
    --font-secundary: "Josefin Slab", sans-serif;
    --font-action: "Muli", sans-serif;
}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
        width: 0;
    }
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }


`