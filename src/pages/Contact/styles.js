import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
  height: 100vh;



    > main {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
  }


  .img-wrapper {
      background-color: rgba(0, 0, 0, 0.99);
      
  }

  .img-wrapper img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      opacity: 0.3;
      animation: zoom 18s;
  }

  @keyframes zoom {

    
      0% {
          transform: scale(1.3);
      }
      100% {
          transform: scale(1);
      }
  }


  .banner {
    position: absolute;
    top: 30%;
    left: 15%;
    
}

    .banner h1 {
        color: #ffffff;
        font-size: 6rem;
        font-family: var(--font-primary);
        font-weight: 200;
        text-shadow: .2rem .3rem 2px rgba(0,0,0,.4);
        line-height: 5.5rem;
        margin-bottom: 2rem;
        animation: moveBanner 1s 0.5s forwards;
        opacity: 0;
    }

    h1 span:hover {
        color: #6a3093;  
        cursor: pointer;
        filter: brightness(1.7);
    }

.banner .cadastro-p {
    font-family: var(--font-secundary);
    color: rgba(255, 255, 255, 1);
    font-size: 3rem;
    text-shadow: .2rem .3rem 2px rgba(0,0,0,.4);
    animation: moveBanner 1s 0.7s forwards;
    opacity: 0;
    margin-bottom: 4rem;
}

.banner input{
    color: #000000;
    font-size: 1.2rem;
    font-family: var(--font-secundary);
    font-weight: 200;
    line-height: 2rem;
    width: 25rem;
    margin-bottom: 2rem;
    animation: moveBanner 1s 0.5s forwards;
    opacity: 0;
    border: none;
    border-radius: 1rem;
    padding-left: 1rem;
    padding: .7rem 1rem;
}

.cadastro {
    color: rgba(231, 231, 231, 0.897);
    font-size: 1rem;
    font-family: var(--font-secundary);
    line-height: 2rem;
    animation: moveBanner 1s 0.5s forwards;
    opacity: 0;
    border: none;
    border-radius: 1rem;
    
    > label {
        font-size: 1.5rem;
        margin-right: 1rem;
    }

}



::placeholder {
    color: black;
    font-size: 1rem;
}

.banner input[type=submit] {
    font-family: var(--font-action);
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: .1rem;
    background: #8E2DE2; 
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  
    background: linear-gradient(to right, #4A00E0, #8E2DE2);
    padding: 0.7rem;
    width: 30%;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    animation: moveBanner 1s 0.9s forwards;
    opacity: 0;
    transition: all .3s ease-in-out;
}

.banner input[type=submit]:hover {
    filter: brightness(1.4);

}

.contact {
    display: flex;
    align-items: self-end;
    gap: 3rem;
    animation: moveBanner 1s 0.9s forwards;
    opacity: 0;
    transition: all .2s ease-in-out;
}

.banner button {
        font-family: var(--font-primary);
        color: #ffffff;
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
        background: #8E2DE2; 
        background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  
        background: linear-gradient(to right, #4A00E0, #8E2DE2);
        padding: 1rem 1.5rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .banner button:hover {
        filter: brightness(1.6);
    }

    a {
        color: white;
        font-size: 2.3rem;
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: #8E2DE2;
        }


@keyframes moveBanner {
    0% {
        transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
        transform:translateY(0) rotateY(0);
        opacity: 1;
    }

}

`