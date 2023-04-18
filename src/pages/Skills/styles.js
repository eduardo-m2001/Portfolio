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
        font-size: 5rem;
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
        font-size: 6rem;
        filter: brightness(1.7);
    }

    .banner p {
        font-family: var(--font-secundary);
        color: rgba(255, 255, 255, 0.87);
        font-size: 2rem;
        text-shadow: .2rem .3rem 2px rgba(0,0,0,.4);
        margin-bottom: 2rem;
        animation: moveBanner 1s 0.7s forwards;
        opacity: 0;
        max-width: 57rem;
        margin-bottom: 2rem;
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
        padding: 1rem 3rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        animation: moveBanner 1s 0.9s forwards;
        opacity: 0;
        transition: all .2s ease-in-out;
    }

    .banner button:hover {
        filter: brightness(1.6);
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