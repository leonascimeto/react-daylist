import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  h1{
    color: #ee8855;
    text-align: center;
  }

  p{
    color: #000055;
    text-align: center;
  }
`

export const Qrcode = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CodeSync = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  span{
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
  }

  input{
    padding: .725rem;
    border-radius: .725rem;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1rem;
    width: 50%;
    outline: none;
  }

  button{
    border-radius: 1rem;
    padding: .6rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: #ee8855;
    color: #fff;
    margin-top: 1rem;
    width: 50%;
    border:none;

    &:hover{
      background-color: #000055;
      cursor: pointer;
    }
  }

`
