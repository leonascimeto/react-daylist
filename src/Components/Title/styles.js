import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 .5rem 0;

  h1{
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    color: #EE8855;

    &:after{
      content: '';
      display: block;
      margin: -5px auto 0 auto;
      width: 100px;
      height: 3px;
      background: #EE8855;
    }
  }

`