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
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   max-width: 100%;

   margin-top: 2rem;
   margin-bottom: 2rem;

   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 20px;
   justify-content: center;
   place-items: center;
   align-items: center;

   animation: moveBanner 1s 0.7s forwards;
   opacity: 0;

    overflow: auto;

    ::-webkit-scrollbar {
    width: 8px;
    
  }

  ::-webkit-scrollbar-thumb {
    background-color: #190b23;
    border-radius: 8px;
  }

   .box {
    position: relative;
    width: 25rem;
    height: 30rem;
    background-color: #190b23;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    overflow: hidden;


  > .img-project img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;


  }

      > .description {
         position: absolute;
         display: flex;
         gap: 2rem;
         align-items: center;
         justify-content: center;
         bottom: 0;
         left: 0;
         right: 0;
         padding: 1rem;
         background-color: rgba(0, 0, 0, 0.7);
         color: white;
         text-align: center;
         opacity: 0;
         transition: opacity 0.2s ease-in-out;
         opacity: 1;

         > span {
            font-family: var(--font-primary);
            color: #ffffff;
            font-size: 1.2rem;
            text-transform: uppercase;
            margin-left: 1.5rem;
         }

         > .btn {
            display: flex;
            align-items: center;
            gap: .7rem;
            margin-right: 1rem;
            
            button {
                font-family: var(--font-primary);
                color: #ffffff;
                font-size: 1.3rem;
                text-transform: uppercase;
                letter-spacing: .1rem;
                background: #8E2DE2;

                background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  
                background: linear-gradient(to right, #4A00E0, #8E2DE2);

                border-radius: 5px;
                border: none;
                cursor: pointer;
                padding: 0px 3px 0 3px;

                a {
                font-family: var(--font-primary);
                color: #ffffff;
                font-size: 1.3rem;
                text-transform: uppercase;
                letter-spacing: .1rem;
                border: none;
                cursor: pointer;
             }
            }

                button:hover {
                filter: brightness(0.7);
            }
        }
      }

      &:hover .description {
         opacity: 1;
      }


   }

   > .box:hover {
      transform: scale(1.06);
      transition: 0.5s;
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

    @media only screen and (max-width: 1239px) {

    .skills {
        grid-template-columns: repeat(3,1fr);
    }
}

        @media only screen and (max-width: 890px) {
        .skills {   
            grid-template-columns: repeat(2,1fr);
            .box {
                width: 25rem;
                height: 25rem;
            }
        }
    }

        @media only screen and (max-width: 555px) {
        .skills {   

            grid-template-columns: repeat(1,1fr);
            .box {
                width: 25rem;
                height: 25rem;
            }
        }
    }


    


`