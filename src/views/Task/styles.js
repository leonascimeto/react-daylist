import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 50%;
`;

export const TypeIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  width: 100%;
  transition: .5s;

  .inative{
    opacity: .5;
  }

  .tes{
    color: red;
  }

  button{
    background: none;
    border: none;
  }

  img{
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:hover{
      opacity: 1;
    }
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  label{
    color: #EE8855;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: auto.5rem;
  }

  input, textarea{
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin-bottom: 2rem;
  }

  input{
    padding: 1rem 1rem .25rem 1rem;
    border: none;
    border-bottom: 2px solid #000055;
    outline: none;
  }

  textarea{
    border: 2px solid #000055;
    padding: 1rem;
    border-radius: .725rem;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  label{
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input{
    width: 1.5rem;
    height: 1.5rem;
  }

  span{
    color: #EE8855;
    font-size: 1.5rem;
    font-weight: bold;
  }

  button{
    border: none;
    background: none;
    font-size: 1.5rem;
    color: #EE8855;
    font-weight: bold;
    cursor: pointer;

    &:hover{
      opacity: .5;
    }

    img{
      width: 1.5rem;
      height: 1.5rem;
    }

  }
`

export const Save = styled.div`
  width: 100%;
  margin: 2rem 0 6rem 0;
  display: flex;
  justify-content: center;
  margin-bottom: ;


  button{
    display: flex;
    align-items: center;
    padding: .8rem 2rem;
    font-size: 1.5rem;
    color: #55EE22;
    font-weight: bold;
    background-color: #000055;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover{
      opacity: .5;
    }

    img{
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    }

  }

  
`;