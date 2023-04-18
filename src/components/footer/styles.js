import styled from "styled-components"

export const Container = styled.footer`

    width: 100%;
    height: 7rem;
    background-color: rgba(0, 0, 0, 0.990);
    display: flex;
    justify-content: center;
    align-items: center;



  .footer-content {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-content p {
    font-family: var(--font-secundary);
    color: #a7a7a7;
    font-size: 1.5rem;

}

.social-list a {
    margin: 0 2rem;
    color:#a7a7a7;
    font-size: 1.3rem;
}

.social-list ul {
    display: flex;
    align-items: center;
}

.social-list li {
  list-style-type: none;

}

`