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


    .skills {
        position: absolute;
        top: 45%;
        left: 11%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        > .box {
            width: 11rem;
            height: 11rem;
            background-color: #190b23;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: .5rem;
            border-radius: 1rem;
            cursor: pointer;
            margin: 0 auto;

            > span {
            font-family: var(--font-primary);
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.87);
            }

            > .icon {
                font-size: 4rem;
                color: rgba(255, 255, 255, 0.87);
            }
        }

        > .box:hover {
            filter: brightness(2);
            transform: scale(1.2); 
            transition: .5s;
       }

        
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